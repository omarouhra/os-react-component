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
    <div className='py-8'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <a>
            <div className=' animate-[spin_20s_infinite]  hover:scale-105 hover:animate-none'>
              <OsIcon className='transitions transitions stroke-black  dark:stroke-white' />
            </div>
          </a>
        </Link>

        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type='button'
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </div>
  );
}

export default Header;
