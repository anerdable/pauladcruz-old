import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Language } from '../translations/translations';

interface LanguageContextProps {
  language: Language;
  changeLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'sv',
  changeLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'sv';
  });

  const changeLanguage = (language: Language) => {
    setLanguage(language);
    localStorage.setItem('language', language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== language) {
      setLanguage(savedLanguage as Language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
