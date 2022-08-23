import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Button() {
  const [likesCounter, setLikesCounter] = useState(30);
  const [like, setLike] = useState(false);

  return (
    <motion.button
      initial='hidden'
      animate='visible'
      layout
      className='relative  flex cursor-pointer  items-center justify-center space-x-6 overflow-hidden rounded-md bg-gray-200 py-6 px-10 font-cal text-white shadow-xl transition duration-300 hover:scale-[1.02]'
      onClick={() => {
        setLike(!like);
      }}
    >
      <div className='realtive flex items-center '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={` tranition h-12 w-12 fill-gray-300 duration-500 ${
            like && "scale-[1.15] fill-red-500"
          }`}
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <span className='text-2xl text-gray-500 lg:text-3xl'>Like</span>

      <div className='h-[42px] overflow-hidden'>
        <div
          className={`flex w-[40px]  flex-col text-2xl text-gray-500 lg:text-3xl   ${
            like ? "-translate-y-10" : "translate-y-1"
          } tansition space-y-2 duration-500`}
        >
          <span>{likesCounter}</span>
          <span>{likesCounter + 1}</span>
        </div>
      </div>
    </motion.button>
  );
}

export default Button;
