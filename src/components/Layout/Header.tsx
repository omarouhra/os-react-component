import React from "react";
import OsIcon from "@/components/icons/OsIcon";
import Link from "next/link";

function Header() {
  return (
    <div className='py-8'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <a>
            <OsIcon />
          </a>
        </Link>
        <button className='grayscale'>☀️</button>
      </nav>
    </div>
  );
}

export default Header;
