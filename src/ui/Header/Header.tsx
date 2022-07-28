import { useEffect, useState } from "react";

import OsIcon from "@/components/icons/OsIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header className='talent-container'>
      <div className='flex h-[70px] items-center justify-between border-b'>
        <div>
          <h1 className='text-2xl font-semibold'>
            <div className='transitions group cursor-pointer hover:scale-105 hover:animate-[spin_2s_infinite]'>
              <OsIcon className='transitions transitions stroke-black group-hover:stroke-cyan-500 dark:stroke-white' />
            </div>
          </h1>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "absolute top-[70px] left-0 h-screen w-full bg-white px-6"
              : "hidden"
          } md:static md:flex md:h-auto md:w-auto md:space-x-4 md:bg-transparent md:px-0`}
        >
          <ul className='items-left flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
            <li className='cursor-pointer'>Home</li>

            <li className='cursor-pointer'>About</li>

            <li className='cursor-pointer'>Contact</li>
          </ul>
        </nav>

        <div className='md:hidden'>
          <button
            className={`rounded-md p-2 ${
              isMenuOpen ? "bg-blue-500 text-white" : ""
            }`}
            onClick={toggleMenu}
            type='button'
          >
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
