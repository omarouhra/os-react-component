import Link from "next/link";
import React from "react";

type cardType = {
  lable: string;
  gradient: string;
  link: string
};

function ComponentCard({ lable, gradient, link }: cardType) {
  return (
    <Link href={ link }>
      <a
        className={ `rounded-lg bg-gradient-to-r hover:shadow-xl flex items-center justify-center md:h-auto  lg:hover:scale-[1.01] ${gradient}  p-[3.5px]` }
      >
        <div className='flex items-center justify-center py-6 w-full  md:py-10  rounded-md  bg-white  dark:bg-gray-900 md:items-start'>
          <p className='font-cal text-2xl  '>
            { lable }
          </p>
        </div>
      </a>
    </Link>
  );
}

export default ComponentCard;
