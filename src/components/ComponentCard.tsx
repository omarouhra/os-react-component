import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type cardType = {
  lable: string;
  gradient: string;
  link: string
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 1 },
  }
}

function ComponentCard({ lable, gradient, link }: cardType) {
  return (
    <Link href={ link }>
      <motion.a
        variants={ item }
        className={ `rounded-lg bg-gradient-to-r hover:shadow-xl flex items-center justify-center md:h-auto  lg:hover:scale-[1.01] ${gradient}  p-[3.5px]  cursor-pointer bg-white hover:shadow-2xl dark:hover:shadow-cyan-500 transition duration-300` }
      >
        <div className='flex items-center justify-center py-6 w-full  md:py-10  rounded-md  bg-white  dark:bg-gray-900 md:items-start'>
          <p className='font-cal text-2xl  '>
            { lable }
          </p>
        </div>
      </motion.a>
    </Link>
  );
}

export default ComponentCard;
