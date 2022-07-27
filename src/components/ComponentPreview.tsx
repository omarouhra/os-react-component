import React, { useState } from "react";
import CodeIcon from "./icons/CodeIcon";
import CopyIcon from "./icons/CopyIcon";
import PreviewIcon from "./icons/PreviewIcon";
import LanguageSelect from "./languageSelect";

function ComponentPreview({
  preview,
  children,
  title,
  fileName,
}: {
  preview?: JSX.Element;
  children?: React.ReactNode;
  title: string;
  fileName: string;
}) {
  const [activeTab, setActivePanel] = useState("preview");

  return (
    <section className=''>
      <div className='flex items-center justify-between py-2'>
        <p className='text-xl font-semibold text-gray-500 dark:text-white'>
          Simple Minimal {title}
        </p>
        <div className='flex items-center justify-center space-x-3'>
          <div className='flex '>
            <button
              className={`short-transitions flex items-center space-x-2 rounded-lg  px-3 ${
                activeTab === "preview" &&
                " bg-blue-500 text-white shadow-md dark:bg-gray-600 dark:text-blue-400"
              }`}
              onClick={() => setActivePanel("preview")}
            >
              <PreviewIcon />
              <span className='text-sm'>Preview</span>
            </button>
            <button
              className={`flex items-center space-x-2  rounded-lg py-1 px-3   short-transitions${
                activeTab === "code" &&
                " bg-blue-500 text-white shadow-md dark:bg-gray-600 dark:text-blue-400"
              }`}
              onClick={() => setActivePanel("code")}
            >
              <CodeIcon />
              <span className='text-sm'>Code</span>
            </button>
            <LanguageSelect />
          </div>
          <div className='h-10 w-0.5 bg-gray-400'></div>
          <button className='short-transitions rounded-lg py-3 px-3 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600'>
            <CopyIcon />
          </button>
        </div>
      </div>
      <div>
        <div className='flex rounded-t-lg bg-gray-200  dark:bg-gray-700'>
          <div className='flex items-center space-x-1 p-4'>
            <span className='h-3 w-3 rounded-full bg-red-400 dark:bg-slate-600'></span>
            <span className='h-3 w-3 rounded-full bg-amber-400 dark:bg-slate-600'></span>
            <span className='h-3 w-3 rounded-full bg-green-400 dark:bg-slate-600'></span>
          </div>
          <div className='flex min-h-full items-center bg-gray-100 px-12 dark:bg-gray-800'>
            {fileName}.js
          </div>
        </div>
        {activeTab === "preview" ? (
          <div className=' h-[500px] rounded-b-md bg-gray-100 px-5 pt-5  dark:bg-gray-800 '>
            {preview}
          </div>
        ) : (
          <div className=' max-h-[500px] overflow-scroll rounded-b-md bg-gray-100 p-12  dark:bg-gray-800'>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default ComponentPreview;
