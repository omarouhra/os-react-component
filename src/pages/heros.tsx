import React from "react";
import { motion } from 'framer-motion'




//Container height animation
const container = {
  hidden: {
    height: "100%",
  },
  visible: {
    height: "0%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
  }
}


// Container children delay
const delayChildren = {
  animate: {
    transition: {
      staggerChildren: 1.4
    }
  }

}
//Fade In animation
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2 }
  }
}

function heros() {
  return (
    <div className="space-y-12">

      {/* Splash Screen 1 */ }
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative py-8 bg-gray-50 dark:bg-gray-800 h-[500px] flex items-center justify-center shadow-2xl">
        <motion.div
          variants={ container }
          className="z-50 absolute top-0 w-full h-full bg-blue-900"></motion.div>
        <motion.h1
          variants={ fadeIn }
          className='mb-6 max-w-3xl text-xl font-bold text-center dark:text-white lg:text-3xl lg:leading-tight'>
          Ready to use React{ " " }
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent lg:text-3xl'>
            Components
          </span>{ " " }
          with high end code quality 🚀
        </motion.h1>
      </motion.section>


      {/* Splash Screen 2 */ }
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative py-8 bg-gray-50 dark:bg-gray-800 h-[500px] flex items-center justify-center shadow-2xl">


        <motion.div
          variants={ delayChildren }
          className="z-50 absolute top-0 w-full h-full flex">
          <motion.div
            variants={ container }
            className="w-1/3 h-full bg-blue-900"></motion.div>
          <motion.div
            variants={ container }
            className="w-1/3 h-full bg-blue-500"></motion.div>
          <motion.div
            variants={ container }
            className="w-1/3 h-full bg-blue-300"></motion.div>
        </motion.div>
        <motion.h1
          variants={ fadeIn }
          className='mb-6 max-w-3xl text-xl font-bold text-center dark:text-white lg:text-3xl lg:leading-tight'>
          Ready to use React{ " " }
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent lg:text-3xl'>
            Components
          </span>{ " " }
          with high end code quality 🚀
        </motion.h1>
      </motion.section>
    </div >
  );
}

export default heros;
