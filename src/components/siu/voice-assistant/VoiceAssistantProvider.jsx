"use client";
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

const VoiceAssistantContext = createContext();

export const useVoiceAssistant = () => useContext(VoiceAssistantContext);

export const VoiceAssistantProvider = ({ children }) => {
  const { lang, setLang } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSupported, setIsSupported] = useState(true);
  
  const recognitionRef = useRef(null);
  const synthRef = useRef(typeof window !== 'undefined' ? window.speechSynthesis : null);
  const voicesLoadedRef = useRef(false);
  const activeUtterances = useRef(new Set()); // Prevent garbage collection

  useEffect(() => {
    if (typeof window !== 'undefined' && synthRef.current) {
      const loadVoices = () => {
        const voices = synthRef.current.getVoices();
        if (voices.length > 0) {
          voicesLoadedRef.current = true;
          console.log(`[Voice AI] ${voices.length} voices loaded.`);
          // Log Arabic voices specifically for debugging
          const arVoices = voices.filter(v => v.lang.startsWith('ar'));
          if (arVoices.length > 0) {
            console.log('[Voice AI] Arabic voices found:', arVoices.map(v => v.name));
          } else {
            console.warn('[Voice AI] NO Arabic voices found on this system.');
          }
        }
      };
      
      loadVoices();
      if (typeof window !== 'undefined' && synthRef.current.onvoiceschanged !== undefined) {
        synthRef.current.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setIsSupported(false);
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang === 'ar' ? 'ar-SA' : 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (event) => {
        console.error('Speech Recognition Error:', event.error);
        setIsListening(false);
      };

      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleVoiceCommand(text);
      };

      recognitionRef.current = recognition;
    }
  }, [lang]);

  // Auto-greeting logic with interaction bypass
  useEffect(() => {
    const hasGreeted = sessionStorage.getItem('siu_voice_greeted');
    if (hasGreeted) return;

    let greetingTriggered = false;

    const attemptGreeting = () => {
      if (greetingTriggered) return;
      
      // Attempt to speak
      const success = speakGreeting();
      if (success) {
        greetingTriggered = true;
        sessionStorage.setItem('siu_voice_greeted', 'true');
        // Clean up listeners
        document.removeEventListener('click', attemptGreeting);
        document.removeEventListener('touchstart', attemptGreeting);
      }
    };

    // Browsers block auto-audio until first interaction
    document.addEventListener('click', attemptGreeting);
    document.addEventListener('touchstart', attemptGreeting);
    document.addEventListener('mousedown', attemptGreeting);

    // Initial attempt (instant per user request)
    const timer = setTimeout(attemptGreeting, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', attemptGreeting);
      document.removeEventListener('touchstart', attemptGreeting);
      document.removeEventListener('mousedown', attemptGreeting);
    };
  }, []);

  const speakGreeting = () => {
    const messages = {
      en: "Welcome to S I U app! I'm your voice agent.",
      ar: "مرحباً بكم في تطبيق S I U! أنا مساعدكم الصوتي."
    };

    console.log("[Voice AI] Triggering Greeting...");
    
    // Clear any existing speech first
    if (synthRef.current) {
      synthRef.current.cancel();
    }

    // Queue English
    speak(messages.en, 'en-US', () => {
      console.log("[Voice AI] English greeting finished. Starting Arabic...");
      // Small pause after English
      setTimeout(() => speak(messages.ar, 'ar-SA', () => {
        console.log("[Voice AI] Arabic greeting finished.");
      }, false), 200);
    }, true);

    return true;
  };

  const speak = (text, voiceLang, onEnd, shouldCancel = true) => {
    if (!synthRef.current) return false;
    
    // Only stop current speech if explicitly requested
    if (shouldCancel) {
      synthRef.current.cancel();
      activeUtterances.current.clear();
    }
    
    // Resume in case it's paused (Chrome bug)
    if (synthRef.current.paused) {
      synthRef.current.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Explicitly set language codes that are common
    const langCode = voiceLang || (lang === 'ar' ? 'ar-SA' : 'en-US');
    utterance.lang = langCode;
    utterance.rate = 0.95; // Slightly slower for better clarity
    utterance.pitch = 1.0;
    
    // Try to find a good voice
    const voices = synthRef.current.getVoices();
    if (voices.length > 0) {
      // Priority 1: Exact match (e.g., ar-SA)
      let targetVoice = voices.find(v => v.lang === langCode);
      
      // Priority 2: Language-only match (e.g., ar)
      if (!targetVoice) {
        targetVoice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
      }

      // Priority 3: Fallback for Arabic specifically if no Arabic voice found
      if (!targetVoice && langCode.startsWith('ar')) {
        targetVoice = voices.find(v => v.lang.includes('ar') || v.name.toLowerCase().includes('arabic'));
      }

      if (targetVoice) {
        console.log(`[Voice AI] Speaking (${langCode}) using voice: ${targetVoice.name}`);
        utterance.voice = targetVoice;
      } else {
        console.warn(`[Voice AI] No specific voice found for ${langCode}, using system default.`);
      }
    } else {
      console.warn(`[Voice AI] No voices available yet for ${langCode}. Voices may still be loading.`);
    }

    // Keep reference to prevent GC
    activeUtterances.current.add(utterance);

    utterance.onstart = () => console.log(`[Voice AI] Audio playback started for: ${text.substring(0, 20)}...`);
    
    utterance.onend = () => {
      console.log(`[Voice AI] Audio playback ended for: ${text.substring(0, 20)}...`);
      activeUtterances.current.delete(utterance);
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      console.error('[Voice AI] Speech Synthesis Error:', event.error, event);
      activeUtterances.current.delete(utterance);
      if (onEnd) onEnd();
    };
    
    try {
      synthRef.current.speak(utterance);
      return true;
    } catch (e) {
      console.error('[Voice AI] Speech synthesis fail:', e);
      return false;
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      setResponse('');
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Start listening error:', err);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const handleVoiceCommand = async (text) => {
    setIsProcessing(true);
    try {
      const res = await fetch('/api/voice-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: text, currentLanguage: lang }),
      });
      
      const data = await res.json();
      
      // 1. Handle Response Speech
      if (data.response) {
        setResponse(data.response);
        speak(data.response);
      }

      // 2. Handle State Actions (e.g., Change Language)
      if (data.action === 'toggleLanguage') {
        setTimeout(() => {
          const nextLang = lang === 'en' ? 'ar' : 'en';
          setLang(nextLang);
        }, 1000); // Small delay to let speech finish
        return;
      }

      // 3. Handle Navigation (Scroll/Route)
      if (data.section) {
        if (window.voiceNavigate) window.voiceNavigate(data.section);
      } else if (!data.response && !data.action) {
        const fallbackMsg = lang === 'ar' ? "عذراً، لم أفهم ذلك. هل يمكنك المحاولة مرة أخرى؟" : "I'm sorry, I didn't quite catch that. Could you try again?";
        setResponse(fallbackMsg);
        speak(fallbackMsg);
      }
    } catch (err) {
      console.error('Command processing error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <VoiceAssistantContext.Provider value={{
      isListening,
      isProcessing,
      transcript,
      response,
      isSupported,
      startListening,
      stopListening,
      speakGreeting
    }}>
      {children}
    </VoiceAssistantContext.Provider>
  );
};
