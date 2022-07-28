import { useLanguageContext } from "@/context/lang-context";

const LanguageSelect = () => {
  const { language, setLanguage } = useLanguageContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    // @ts-ignore
    setLanguage(e.target.value);

    localStorage.setItem("language", e.target.value);
  };

  return (
    <select
      className='short-transitions rounded-md bg-transparent p-2 text-sm text-gray-500 outline-blue-500 dark:text-gray-200 dark:outline-blue-300'
      id='languageSelect'
      value={language}
      onChange={handleChange}
    >
      <option value='javascript'>JS</option>
      <option value='typescript'>TS</option>
    </select>
  );
};

export default LanguageSelect;
