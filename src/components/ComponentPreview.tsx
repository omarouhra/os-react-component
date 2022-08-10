import React, { useState } from "react";
import CodeIcon from "./icons/CodeIcon";
import CopyIcon from "./icons/CopyIcon";
import JsIcon from "./icons/JsIcon";
import PreviewIcon from "./icons/PreviewIcon";
import ReactIcon from "./icons/ReactIcon";
import LanguageSelect from "./languageSelect";
import copy from "copy-to-clipboard";

function ComponentPreview({
  preview,
  children,
  title,
  fileName,
  fileType,
  codeToBeCopied,
}: {
  preview?: JSX.Element;
  children?: React.ReactNode;
  title: string;
  fileName: string;
  fileType: "jsx" | "tsx";
  codeToBeCopied: string;
}) {
  const [activeTab, setActivePanel] = useState<"preview" | "code">("preview");
  const [activeCopyTag, setActiveCopyTag] = useState(false);

  const copyCode = () => {
    // copy code functionality
    copy(codeToBeCopied);

    // show copied tag
    setActiveCopyTag(true);

    setTimeout(() => {
      setActiveCopyTag(false);
    }, 1200);
  };
  return (
    <section className=''>
      <div className='flex flex-col items-start justify-between space-y-4 py-2 md:flex-row  md:items-center md:space-y-0 '>
        <p className='text-lg font-semibold text-gray-700 dark:text-white'>
          Simple Minimal {title}
        </p>
        <div className='relative flex w-full items-center justify-between space-x-3 md:w-auto md:justify-end'>
          <div className='flex'>
            <button
              className={`short-transitions flex items-center space-x-2 rounded-md  px-3 ${
                activeTab === "preview" &&
                " bg-blue-500 text-white shadow-md dark:bg-gray-600 dark:text-blue-400"
              }`}
              onClick={() => setActivePanel("preview")}
            >
              <PreviewIcon />
              <span className='hidden text-sm sm:inline-block'>Preview</span>
            </button>
            <button
              className={`flex items-center space-x-2  rounded-md py-1 px-3   short-transitions${
                activeTab === "code" &&
                " bg-blue-500 text-white shadow-md dark:bg-gray-600 dark:text-blue-400"
              }`}
              onClick={() => setActivePanel("code")}
            >
              <CodeIcon />

              <span className='hidden text-sm sm:inline-block'>Code</span>
            </button>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='hidden h-8 w-0.5 bg-gray-400/20 md:inline-block'></div>

            <LanguageSelect />
            {activeCopyTag && (
              <div className='absolute -top-12 -right-[19px] hidden  animate-fade-in-up rounded-md bg-blue-500 px-4 py-2 text-xs text-white sm:inline-block'>
                Copied 👍
              </div>
            )}

            <button
              className=' short-transitions  hidden rounded-lg py-3 px-3 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600 sm:inline-block'
              aria-label='Copy code'
              onClick={() => copyCode()}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='rounded-md shadow-xl'>
        {activeTab === "code" && (
          <div className='flex rounded-t-lg  bg-gray-600 dark:bg-gray-700'>
            <div className='flex items-center space-x-1 p-4'>
              <span className='h-3 w-3 rounded-full bg-red-400 '></span>
              <span className='h-3 w-3 rounded-full bg-amber-400 '></span>
              <span className='h-3 w-3 rounded-full bg-green-400 '></span>
            </div>

            <div className='flex items-center justify-between space-x-6 overflow-hidden bg-gray-700 px-6  capitalize text-white dark:bg-gray-800 sm:min-w-[175px] '>
              <div
                className={`flex ${
                  fileType === "tsx" ? "translate-y-2" : "-translate-y-[3.2rem]"
                } transitions  h-8 translate-y-2 flex-col space-y-10`}
              >
                <div>
                  <ReactIcon />
                </div>
                <div>
                  <JsIcon />
                </div>
              </div>
              <p>
                {fileName}.<span className=' normal-case '>{fileType}</span>
              </p>
            </div>
          </div>
        )}
        {activeTab === "preview" ? (
          <div className=' h-[500px] rounded-md bg-gray-100 px-5 pt-5  dark:bg-gray-800 '>
            {preview}
          </div>
        ) : (
          <div className=' max-h-[500px] overflow-scroll rounded-b-md  bg-gray-700 p-12  dark:bg-gray-800'>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default ComponentPreview;
