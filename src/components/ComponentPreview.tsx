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
  fileType,
}: {
  preview?: JSX.Element;
  children?: React.ReactNode;
  title: string;
  fileName: string;
  fileType: "js" | "ts";
}) {
  const [activeTab, setActivePanel] = useState("preview");
  console.log("🔥", fileType);
  return (
    <section className=''>
      <div className='flex flex-col items-start justify-between space-y-4 py-2 md:flex-row  md:items-center md:space-y-0'>
        <p className='text-lg font-semibold text-gray-700 dark:text-white'>
          Simple Minimal {title}
        </p>
        <div className='flex w-full items-center justify-between space-x-3 md:w-auto md:justify-end'>
          <div className='flex'>
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
          </div>
          <div className='flex items-center space-x-2'>
            <div className='hidden h-8 w-0.5 bg-gray-400/20 md:inline-block'></div>

            <LanguageSelect />
            <button
              className='short-transitions rounded-lg py-3 px-3 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600'
              aria-label='Copy code'
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className='flex rounded-t-lg bg-gray-200  dark:bg-gray-700'>
          <div className='flex items-center space-x-1 p-4'>
            <span className='h-3 w-3 rounded-full bg-red-400 '></span>
            <span className='h-3 w-3 rounded-full bg-amber-400 '></span>
            <span className='h-3 w-3 rounded-full bg-green-400 '></span>
          </div>
          <div className='flex min-h-full items-center overflow-hidden bg-gray-100 px-12 capitalize dark:bg-gray-800'>
            <p>{fileName}.</p>
            <div
              className={`flex h-8 ${
                fileType === "ts" ? "translate-y-[2.25rem]" : "-translate-y-9"
              }  transitions flex-col items-start justify-center space-y-12 normal-case`}
            >
              <span className='	 text-blue-500'>tsx</span>
              <span className=' text-yellow-500 dark:text-yellow-300'>js</span>
            </div>
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
