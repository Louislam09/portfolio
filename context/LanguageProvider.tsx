"use client";
import React, { createContext, useContext, useState } from "react";

export enum LanguageOption {
  ENGLISH = "en",
  SPANISH = "es",
}

interface LanguageContextProps {
  currentLanguage: LanguageOption.ENGLISH | LanguageOption.SPANISH;
  toggleLanguage: () => void;
}

interface StoreState {
  currentLanguage: LanguageOption.ENGLISH | LanguageOption.SPANISH;
}

const initialContext = {
  currentLanguage: LanguageOption.ENGLISH,
  toggleLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextProps>(initialContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageOption>(
    LanguageOption.ENGLISH
  );

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === LanguageOption.ENGLISH
        ? LanguageOption.SPANISH
        : LanguageOption.ENGLISH
    );
  };

  const contextValue = {
    currentLanguage: language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  return context;
};

export default LanguageProvider;
