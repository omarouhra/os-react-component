import React, { createContext, useContext, useEffect, useState } from "react";

type Languages = "javascript" | "typescript";

interface LanguageContextInterface {
  language: Languages;
  setLanguage: React.Dispatch<React.SetStateAction<Languages>>;
}

const LanguageContext = createContext({} as LanguageContextInterface);

export const useLanguageContext = () => useContext(LanguageContext);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>("typescript");

  useEffect(() => {
    const language = localStorage.getItem("language");

    language === "javascript" || language === "typescript"
      ? setLanguage(language)
      : setLanguage("typescript");
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
