import React, { useEffect, useState } from "react";
import OsIcon from "@/components/icons/OsIcon";
import Link from "next/link";
import { useTheme } from "next-themes";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className='py-8'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <a>
            <div className='transitions group hover:scale-105 hover:animate-[spin_2s_infinite]'>
              <OsIcon className='transitions transitions stroke-black group-hover:stroke-cyan-500 dark:stroke-white' />
            </div>
          </a>
        </Link>

        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type='button'
          className='transitions rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700'
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
