"use client";
import React, { useEffect, useState } from 'react';
import { useVoiceAssistant } from './VoiceAssistantProvider';
import { useVoiceNavigation } from './useVoiceNavigation';
import { useLanguage } from '../../../contexts/LanguageContext';
import './voice-assistant.css';

const VoiceAssistantWidget = () => {
  const { 
    isListening, 
    isProcessing, 
    transcript, 
    response, 
    isSupported, 
    startListening, 
    stopListening 
  } = useVoiceAssistant();
  
  const { navigateToSection } = useVoiceNavigation();
  const { lang } = useLanguage();
  const [showStatus, setShowStatus] = useState(false);

  // Set up global navigation function for the provider to call
  useEffect(() => {
    window.voiceNavigate = (target) => {
      navigateToSection(target);
    };
    return () => delete window.voiceNavigate;
  }, [navigateToSection]);

  useEffect(() => {
    if (transcript || response || isListening || isProcessing) {
      setShowStatus(true);
      const timer = setTimeout(() => {
        if (!isListening && !isProcessing) setShowStatus(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [transcript, response, isListening, isProcessing]);

  if (!isSupported) {
    return (
      <div className={`voice-assistant-widget ${lang === 'ar' ? 'ar' : ''}`}>
        <div className="voice-fallback-input">
          <input 
            type="text" 
            placeholder={lang === 'ar' ? 'اكتب أمرك هنا...' : 'Type command...'} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // Here we could manually handle text commands if needed
                alert(lang === 'ar' ? 'البحث الصوتي غير مدعوم في هذا المتصفح' : 'Voice not supported in this browser');
              }
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`voice-assistant-widget ${lang === 'ar' ? 'ar' : ''}`}>
      {showStatus && (
        <div className={`voice-status-bubble ${lang === 'ar' ? 'rtl' : ''}`}>
          {isListening && (
            <div className="waveform-container">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
              <span style={{ fontSize: '12px', marginLeft: '8px' }}>
                {lang === 'ar' ? 'جاري الاستماع...' : 'Listening...'}
              </span>
            </div>
          )}
          {transcript && <p className="transcript-text">"{transcript}"</p>}
          {isProcessing && <p className="assistant-response">{lang === 'ar' ? 'جاري المعالجة...' : 'Processing...'}</p>}
          {response && <p className="assistant-response">{response}</p>}
        </div>
      )}

      <button 
        className={`voice-mic-button ${isListening ? 'listening' : ''}`}
        onClick={isListening ? stopListening : startListening}
        title={lang === 'ar' ? 'تحدث مع المساعد' : 'Talk to Assistant'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L12 1C9.23858 1 7 3.23858 7 6V12C7 14.7614 9.23858 17 12 17V17C14.7614 17 17 14.7614 17 12V6C17 3.23858 14.7614 1 12 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10V12C19 15.866 15.866 19 12 19V19C8.13401 19 5 15.866 5 12V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 23H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default VoiceAssistantWidget;
