import React, { useState } from "react";
import CodeIcon from "./icons/CodeIcon";
import CopyIcon from "./icons/CopyIcon";
import PreviewIcon from "./icons/PreviewIcon";

function ComponentPreview({
  preview,
  children,
  title,
}: {
  preview?: JSX.Element;
  children?: React.ReactNode;
  title: string;
}) {
  const [activeTab, setActivePanel] = useState("preview");

  return (
    <section className=''>
      <div className='flex items-center justify-between py-4'>
        <p className='text-xl font-semibold text-gray-500 dark:text-white'>
          Simple Minimal {title}
        </p>
        <div className='flex items-center justify-center space-x-6'>
          <div className='flex '>
            <button
              className={`short-transitions rounded-l-lg py-3 px-6 ${
                activeTab === "preview" && " bg-gray-200 dark:bg-gray-600"
              }`}
              onClick={() => setActivePanel("preview")}
            >
              <PreviewIcon />
            </button>
            <button
              className={`rounded-r-lg py-3 px-6  short-transitions${
                activeTab === "code" && " bg-gray-200 dark:bg-gray-600"
              }`}
              onClick={() => setActivePanel("code")}
            >
              <CodeIcon />
            </button>
          </div>
          <button className='short-transitions rounded-lg py-3 px-3 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600'>
            <CopyIcon />
          </button>
        </div>
      </div>

      {activeTab === "preview" ? (
        <div className='flex h-[500px] items-center justify-center rounded-md bg-gradient-to-r from-blue-700 to-cyan-300 '>
          {preview}
        </div>
      ) : (
        <div className=' max-h-[500px] p-12 overflow-scroll rounded-md bg-gray-700'>
          {children}
        </div>
      )}
    </section>
  );
}

export default ComponentPreview;
