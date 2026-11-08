'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Localized } from '@/types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T>(obj: Localized<T> | undefined) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('ranim-portfolio-lang') as Language;
    if (saved === 'en' || saved === 'fr') {
      setLanguageState(saved);
    } else {
      // Check browser preferred language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'fr') {
        setLanguageState('fr');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ranim-portfolio-lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = <T,>(obj: Localized<T> | undefined): T => {
    if (!obj) return '' as unknown as T;
    const val = obj[language];
    if (typeof val === 'string' && val.trim() === '') {
      return obj.en;
    }
    return val ?? obj.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
