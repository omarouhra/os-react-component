import Link from "next/link";
import React from "react";

type ComponentType = {
  content?: any;
  link: any;
};

function Component({ content, link }: ComponentType) {
  return (
    <Link href={link}>
      <a>
        <div className='transitions relative h-[300px] space-y-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA]  p-4 opacity-80 shadow-2xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full  hover:opacity-100'>
          <div className='flex h-24 items-center justify-center rounded-lg bg-rose-100/10 text-center text-xl font-semibold capitalize text-white'>
            {content}
          </div>
          <div className='space-y-3'>
            <div className='h-3 w-3/5 rounded-lg bg-rose-100/10'></div>
            <div className='h-3 w-4/5 rounded-lg bg-rose-100/20'></div>
            <div className='h-3 w-2/5 rounded-lg bg-rose-100/20'></div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Component;
