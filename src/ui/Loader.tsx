import { motion } from "framer-motion";

const spinAnimation = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

export function CircleLoader() {
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4'>
      <div className='relative box-border h-8 w-8'>
        <motion.span
          className='absolute top-0 left-0 box-border block  h-8 w-8 rounded-full border-4 border-t-4 border-solid border-[#1A4670] border-t-[#1C7ED6]'
          animate={{ rotate: 360 }}
          transition={spinAnimation}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

export function DotsLoader() {
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4'>
      <motion.div
        className='flex h-8 w-8 justify-around'
        variants={containerVariants}
        initial='start'
        animate='end'
      >
        <motion.span
          className='block h-2 w-2 rounded-md bg-blue-600'
          variants={circleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className='block h-2 w-2 rounded-md bg-blue-600'
          variants={circleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className='block h-2 w-2 rounded-md bg-blue-600'
          variants={circleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
}
