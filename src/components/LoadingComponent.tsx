import type { Component } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

function LoadingComponent({ image, title }: Component) {
  return (
    <div className='transitions relative h-[300px] space-y-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA]  p-4 opacity-80 shadow-2xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent hover:opacity-100'>
      <Link href='/components'>
        <a>
          <div className='flex h-24 items-center justify-center rounded-lg bg-rose-100/10 text-center text-xl font-semibold text-white'>
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className='rounded-lg'
            />
          </div>
          <div className='space-y-3'>
            <div className='h-3 w-3/5 rounded-lg bg-rose-100/10'></div>
            <div className='h-3 w-4/5 rounded-lg bg-rose-100/20'></div>
            <div className='h-3 w-2/5 rounded-lg bg-rose-100/20'></div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default LoadingComponent;
