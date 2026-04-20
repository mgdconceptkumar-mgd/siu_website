import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

export const useVoiceNavigation = () => {
  const router = useRouter();
  const { lang, setLang } = useLanguage();

  const handleVoiceAction = useCallback((action) => {
    if (action === 'toggleLanguage') {
      const nextLang = lang === 'en' ? 'ar' : 'en';
      setLang(nextLang);
      return true;
    }
    return false;
  }, [lang, setLang]);

  const navigateToSection = useCallback((target) => {
    if (!target) return false;

    // Handle Route Navigation (Next.js)
    if (target.startsWith('/')) {
      router.push(target);
      return true;
    }

    // Handle Anchor Navigation (Smooth Scroll)
    if (target.startsWith('#')) {
      const element = document.querySelector(target);
      if (element) {
        const offset = 120; // Offset for fixed header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
    }

    return false;
  }, [router]);

  return { navigateToSection, handleVoiceAction };
};
