import React, { createContext, useContext, useState, useCallback } from 'react';
import { type Lang, type AppTranslations, translations } from './translations';

/** Détecte la langue préférée du navigateur, fallback sur 'fr' */
function detectLanguage(): Lang {
  const saved = localStorage.getItem('pdj-lang') as Lang | null;
  if (saved && saved in translations) return saved;

  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser in translations) return browser as Lang;

  return 'fr';
}

interface LanguageContextValue {
  lang: Lang;
  t: AppTranslations;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('pdj-lang', l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
