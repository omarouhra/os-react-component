import { motion } from "framer-motion";

const getWords = () => {
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

  return words;
};

const LetterAnimation = () => {
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
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, repeat: Infinity, repeatDelay: 5 },
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
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex h-full items-center justify-center rounded-md bg-white  px-5 text-center  dark:bg-black/10 '
    >
      <motion.div variants={ containerAnimation }>
        { getWords()
          .flat()
          .map((element, index) => {
            return (
              <motion.span
                className='inline-block font-cal text-3xl md:text-7xl'
                variants={ letterAnimation }
                key={ index }
              >
                { element }
              </motion.span>
            );
          }) }
      </motion.div>
    </motion.div>
  );
};

const GradientTextAnimation = () => {
  // Text color animation
  const colorAnimation = {
    hidden: {
      color: "#cca2f9",
    },
    visible: {
      color: "#0055FF",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1, repeat: Infinity, repeatDelay: 5 },
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
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex h-full items-center justify-center rounded-md    bg-white  px-5 text-center  dark:bg-black/10'
    >
      <motion.div variants={ containerAnimation }>
        { getWords()
          .flat()
          .map((element, index) => {
            return (
              <motion.span
                className='inline-block font-cal text-3xl md:text-7xl'
                variants={ colorAnimation }
                key={ index }
              >
                { element }
              </motion.span>
            );
          }) }
      </motion.div>
    </motion.div>
  );
};

const BlendBackgroundTextAnimation = () => {
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
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, repeat: Infinity, repeatDelay: 5 },
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
    <motion.div
      initial='hidden'
      animate='visible'
      className='relative flex h-full items-center justify-center rounded-md  bg-white px-5 text-center  dark:bg-black/10'
    >
      <motion.div variants={ containerAnimation }>
        <motion.div
          initial={ { height: "100%" } }
          animate={ {
            height: "0",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2, repeat: Infinity, repeatDelay: 3.5 },
          } }
          className='absolute top-0 left-0 h-full w-full bg-black dark:bg-white'
        ></motion.div>
        { getWords()
          .flat()
          .map((element, index) => {
            return (
              <motion.span
                className='inline-block font-cal text-3xl text-white mix-blend-difference md:text-7xl'
                variants={ letterAnimation }
                key={ index }
              >
                { element }
              </motion.span>
            );
          }) }
      </motion.div>
    </motion.div>
  );
};

export { LetterAnimation, GradientTextAnimation, BlendBackgroundTextAnimation };
