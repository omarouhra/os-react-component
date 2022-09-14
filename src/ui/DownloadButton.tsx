import { motion, useAnimation, Variants } from "framer-motion";
import { useState } from "react";

const paths = [
  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
  "M2 11C2 7.13405 5.13401 3.00004 9 4.00004C12.866 5.00004 39.7401 10 66 4.00004C92.2599 -1.99996 119.134 3.00004 123 4.00004C126.866 5.00004 130 7.13405 130 11V41C130 44.866 126.866 49 123 48C119.134 47 92.2599 42 66 48C39.7401 54 12.866 49 9 48C5.13401 47 2 44.866 2 41V11Z",
  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
  "M2 11C2 7.13405 5.13401 3.00004 9 4.00004C12.866 5.00004 39.7401 10 66 4.00004C92.2599 -1.99996 119.134 3.00004 123 4.00004C126.866 5.00004 130 7.13405 130 11V41C130 44.866 126.866 49 123 48C119.134 47 92.2599 42 66 48C39.7401 54 12.866 49 9 48C5.13401 47 2 44.866 2 41V11Z",
  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
  "M2 11C2 7.13401 5.13401 4 9 4C12.866 4 39.7401 4 66 4C92.2599 4 119.134 4 123 4C126.866 4 130 7.13401 130 11V41C130 44.866 126.866 48 123 48C119.134 48 92.2599 48 66 48C39.7401 48 12.866 48 9 48C5.13401 48 2 44.866 2 41V11Z",
];

const defaultTextVariants: Variants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
    transition: { duration: 0.25 },
  },
  visible: {
    scale: 1.075,
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

const defaultTextContainer: Variants = {
  hidden: {
    transition: { staggerChildren: 0.075, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.075 },
  },
};

const dotsVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: [-5, 5, -5, 5, -5, 0],
    transition: {
      duration: 1.1,
      times: [0, 0.01],
    },
  },
};

const dotsContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.075,
      staggerDirection: -1,
    },
  },
};

const successTextVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.01,
    },
  },
  visible: {
    scale: [1.1, 1],
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

const successContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.075,
      staggerDirection: -1,
      delayChildren: 1,
    },
  },
};

const successTickVariants: Variants = {
  hidden: {
    pathLength: 0,
    transition: {
      duration: 0.2,
      delay: 1,
    },
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants: Variants = {
  end: {
    scale: 1.05,
    transition: {
      duration: 0.15,
    },
  },
  reset: {
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
};

function DownloadButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const svgControls = useAnimation();
  const defaultTextControls = useAnimation();
  const loadingControls = useAnimation();
  const successTextControls = useAnimation();
  const successTickControls = useAnimation();
  const buttonControls = useAnimation();

  async function animate() {
    setIsAnimating(true);
    await defaultTextControls.start("hidden");
    svgControls.start({
      d: paths,
    });
    await loadingControls.start("visible");
    await loadingControls.start("hidden");
    await successTickControls.start("visible");
    await successTextControls.start("visible");
    await buttonControls.start("end");
    await buttonControls.start("reset");
    successTextControls.start("hidden");
    await successTickControls.start("hidden");
    defaultTextControls.start("visible");
    setIsAnimating(false);
  }

  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4 '>
      <motion.button
        className='relative w-32 text-center text-base font-semibold drop-shadow [transform:translateZ(0)]'
        onClick={() => !isAnimating && animate()}
        variants={buttonVariants}
        animate={buttonControls}
      >
        <motion.div className='absolute top-3 bottom-3 right-0 left-0 z-10 block'>
          <motion.div
            className='inline-block align-top'
            variants={defaultTextContainer}
            animate={defaultTextControls}
          >
            {Array.from("Download").map((letter, index) => (
              <motion.span
                key={`letter-${letter}-${index}`}
                className='inline-block origin-center align-top'
                variants={defaultTextVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className='absolute top-3 bottom-3 right-0 left-0 z-10 block'>
          <motion.svg
            className='mx-[5px] my-[5px] inline-block h-[13px] w-[13px] stroke-white stroke-2 align-top '
            fill='none'
            viewBox='0 0 13 10'
            initial='hidden'
            animate={successTickControls}
          >
            <motion.path
              variants={successTickVariants}
              d='M1 5L4.66667 9L12 1'
            />
          </motion.svg>
          <motion.div
            className='inline-block align-top'
            animate={successTextControls}
            variants={successContainer}
          >
            {Array.from("Done").map((letter, index) => (
              <motion.span
                key={`letter-${letter}-${index}`}
                className='inline-block origin-center scale-0 align-top opacity-0 '
                variants={successTextVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className='absolute top-5 bottom-5 left-0 right-0 z-10 flex items-center justify-center'
          animate={loadingControls}
          variants={dotsContainerVariants}
        >
          {[...new Array(5)].map((dot, index) => {
            return (
              <motion.span
                key={`dot-${index}`}
                className='mx-1 my-0 block h-[6px] w-[6px] translate-y-[6px] scale-0 transform rounded-md bg-white opacity-0'
                variants={dotsVariants}
              />
            );
          })}
        </motion.div>

        <motion.svg
          viewBox='0 0 132 52'
          className='block h-[52px] w-[132px] fill-blue-600 transition-all [transform:translateZ(0)] hover:fill-blue-700'
        >
          <motion.path
            d='M2 11C2 7.13401 5.13401 4 9 4C12.866 4 39.7401 4 66 4C92.2599 4 119.134 4 123 4C126.866 4 130 7.13401 130 11V41C130 44.866 126.866 48 123 48C119.134 48 92.2599 48 66 48C39.7401 48 12.866 48 9 48C5.13401 48 2 44.866 2 41V11Z'
            animate={svgControls}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        </motion.svg>
      </motion.button>
    </div>
  );
}

export default DownloadButton;
