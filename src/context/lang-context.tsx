import React, { createContext, useContext, useState } from "react";

interface LangContextInterface {
  lang: "JavaScript" | "TypeScript";
  setLang: React.Dispatch<React.SetStateAction<"JavaScript" | "TypeScript">>;
}

const LangContext = createContext({} as LangContextInterface);

export const useLangContext = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"JavaScript" | "TypeScript">("TypeScript");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
