import { useEffect, useState } from "react";

const LanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = useState<
    "javascript" | "typescript"
  >();

  useEffect(() => {
    const language = localStorage.getItem("language");

    language === "javascript" || language === "typescript"
      ? setCurrentLanguage(language)
      : // if language is not "javascript" or "typescript", Set language to "typescript"
        setCurrentLanguage("typescript");
  }, [currentLanguage]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    localStorage.setItem("language", e.target.value);

  return (
    <select
      className='short-transitions rounded-r-lg py-3 px-6'
      id='languageSelect'
      defaultValue={currentLanguage}
      onChange={handleChange}
    >
      <option value='javascript'>JavaScript</option>
      <option value='typescript'>TypeScript</option>
    </select>
  );
};

export default LanguageSelect;
