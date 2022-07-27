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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    // @ts-ignore
    setCurrentLanguage(e.target.value);

    localStorage.setItem("language", e.target.value);
  };

  return (
    <select
      className='short-transitions rounded-md bg-transparent p-2 text-sm text-gray-500 outline-blue-500 dark:text-gray-200 dark:outline-blue-300'
      id='languageSelect'
      value={currentLanguage}
      onChange={handleChange}
    >
      <option value='javascript'>JS</option>
      <option value='typescript'>TS</option>
    </select>
  );
};

export default LanguageSelect;
