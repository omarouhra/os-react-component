import React from "react";
import { motion } from "framer-motion";

//Container height animation
const containerHeight = {
  hidden: {
    height: "100%",
  },
  visible: {
    height: "0%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5, repeat: Infinity, repeatDelay: 4 },
  },
};
//Container width animation
const containerWidth = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: "0%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5, repeat: Infinity, repeatDelay: 4 },
  },
};

// Container children delay
const delayChildren = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, repeat: Infinity, repeatDelay: 4
    },
  },
};
//Fade In animation
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2, repeat: Infinity, repeatDelay: 4 },
  },
};

function SimpleSplash() {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      className='relative flex h-full items-center justify-center bg-gray-50 py-8 dark:bg-gray-800 '
    >
      <motion.div
        variants={ containerHeight }
        className='absolute top-0 z-50 h-full w-full bg-blue-900'
      ></motion.div>
      <motion.h1
        variants={ fadeIn }
        className='mb-6 max-w-3xl text-center font-cal  text-xl dark:text-white lg:text-3xl lg:leading-tight'
      >
        Simple Splash Screen 🚀
      </motion.h1>
    </motion.section>
  );
}

function NestedSplash() {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      className='relative flex h-full items-center justify-center bg-gray-50 py-8 dark:bg-gray-800 '
    >
      <motion.div
        variants={ delayChildren }
        className='absolute top-0 z-50 flex h-full w-full'
      >
        <motion.div
          variants={ containerHeight }
          className='h-full w-1/3 bg-blue-900'
        ></motion.div>
        <motion.div
          variants={ containerHeight }
          className='h-full w-1/3 bg-blue-500'
        ></motion.div>
        <motion.div
          variants={ containerHeight }
          className='h-full w-1/3 bg-blue-300'
        ></motion.div>
      </motion.div>
      <motion.h1
        variants={ fadeIn }
        className='mb-6 max-w-3xl text-center font-cal text-xl dark:text-white lg:text-3xl lg:leading-tight'
      >
        Nested Container Splash Screen 🚀
      </motion.h1>
    </motion.section>
  );
}

function RevealSplash() {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      className='relative flex h-full items-center justify-center bg-gray-50 py-8 dark:bg-gray-800 '
    >
      <motion.div
        variants={ delayChildren }
        className='absolute top-0 z-50 flex h-full w-full'

      >
        <motion.div
          variants={ containerWidth }
          className='h-full bg-gradient-to-r from-blue-900 to-cyan-300'
        ></motion.div>
      </motion.div>
      <motion.h1
        variants={ fadeIn }
        className='mb-6 max-w-3xl text-center font-cal text-xl dark:text-white lg:text-3xl lg:leading-tight'
      >
        Reaveal Splash Screen 🚀
      </motion.h1>
    </motion.section>
  );
}

export { SimpleSplash, NestedSplash, RevealSplash };
