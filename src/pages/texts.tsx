import React from "react";
import { motion } from "framer-motion";

function texts() {
  const text = "Letter Animation Text";

  // splite words
  const splitWords = text.split(" ");

  // splite words to letters
  const words = splitWords.map((word) => {
    return word.split("");
  });

  //  adding spacing
  words.map((word) => {
    return word.push("\u00A0");
  });

  // letter animation
  const letterAnimation = {
    hidden: {
      y: "40%",
      opacity: 0,
      // transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };
  // Text color animation
  const colorAnimation = {
    hidden: {
      color: "#68acff",
    },
    visible: {
      color: "#0055FF",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // letter container animation
  const containerAnimation = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className='space-y-12'>
      {/* Letter Animation  */}
      <motion.div
        initial='hidden'
        animate='visible'
        className='flex h-[400px] items-center justify-center rounded-md   border bg-white py-12 px-5 text-center  dark:bg-black/10 '
      >
        <motion.div variants={containerAnimation}>
          {words.flat().map((element, index) => {
            return (
              <motion.span
                className='mt-3 inline-block font-cal text-3xl md:text-7xl  '
                variants={letterAnimation}
                key={index}
              >
                {element}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>

      {/* gradient Text Animation  */}
      <motion.div
        initial='hidden'
        animate='visible'
        className='flex h-[400px] items-center justify-center rounded-md  border  bg-white py-12 px-5 text-center  dark:bg-black/10'
      >
        <motion.div variants={containerAnimation}>
          {words.flat().map((element, index) => {
            return (
              <motion.span
                className='mt-3 inline-block font-cal text-3xl md:text-7xl   '
                variants={colorAnimation}
                key={index}
              >
                {element}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Blend background Text Animation  */}
      <motion.div
        initial='hidden'
        animate='visible'
        className='relative flex h-[400px] items-center justify-center rounded-md border bg-white py-12 px-5 text-center  dark:bg-black/10'
      >
        <motion.div variants={containerAnimation}>
          <motion.div
            initial={{ height: "100%" }}
            animate={{
              height: "0",
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 5 },
            }}
            className='absolute top-0 left-0 h-full w-full bg-black dark:bg-white'
          ></motion.div>
          {words.flat().map((element, index) => {
            return (
              <motion.span
                className='mt-3 inline-block font-cal text-3xl text-white mix-blend-difference md:text-7xl'
                variants={letterAnimation}
                key={index}
              >
                {element}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default texts;
