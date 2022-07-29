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
      className='short-transitions rounded-md border border-blue-500 bg-transparent p-2 text-sm text-gray-500 outline-blue-500 dark:text-gray-200 dark:outline-blue-300 md:border-none'
      id='languageSelect'
      value={language}
      onChange={handleChange}
    >
      <option value='javascript'>Javascript</option>
      <option value='typescript'>Typescript</option>
    </select>
  );
};

export default LanguageSelect;
