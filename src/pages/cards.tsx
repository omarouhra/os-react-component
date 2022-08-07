import React from "react";

const CARD_CONTENT = [
  "No repetetive Code",
  "Javascript & Typescript support",
  "Weekly new components",
  "Minimal components with animaitions",
];

function cards() {
  return (
    <section className='space-y-20 py-20'>
      {/* Card  1*/}
      <div className='relative bg-white px-6 py-8 shadow-xl  ring-1 ring-gray-900/5 hover:scale-[1.01] dark:bg-black/100 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <div className='mx-auto max-w-md'>
          <div className='divide-y divide-gray-100'>
            <div className='space-y-6 py-8 '>
              <p className='text-xl font-semibold leading-7 text-gray-800 dark:text-white'>
                Welcome to Os React Components 🚀
              </p>
              <ul className='space-y-4'>
                {CARD_CONTENT.map((item, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='h-6 w-6 flex-none fill-gray-100 stroke-gray-500 stroke-2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <circle cx='12' cy='12' r='11' />
                      <path
                        d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9'
                        fill='none'
                      />
                    </svg>
                    <p className='ml-4 text-sm'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='pt-8 '>
              <a
                // href='https://tailwindcss.com/docs'
                className='ml-0 text-base font-semibold text-sky-500 hover:text-sky-600 dark:text-blue-200 dark:hover:text-sky-500'
              >
                Visite the website &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className='cursor-pointer   bg-white px-6 py-12 shadow-xl hover:scale-[1.01] dark:bg-black/100  sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <div className=' mb-8 space-y-6  '>
          <p className=' text-xl text-gray-800 dark:text-white'>
            Welcome to Os React Components 🚀
          </p>
        </div>

        {CARD_CONTENT.map((item, index) => (
          <div
            key={index}
            className=' mb-4 flex items-center bg-white px-4 py-3 text-black shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:translate-x-2   sm:mx-auto sm:max-w-lg sm:rounded-lg'
          >
            <svg
              className='h-6 w-6 flex-none fill-gray-100 stroke-gray-500 stroke-2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='11' />
              <path
                d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9'
                fill='none'
              />
            </svg>
            <p className='ml-4 text-sm'>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default cards;
