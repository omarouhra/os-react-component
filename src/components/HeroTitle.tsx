import { motion } from "framer-motion";
import React from "react";

function HeroTitle() {
  return (
    <h1 className='mb-6 max-w-3xl font-cal text-3xl dark:text-white lg:text-5xl lg:leading-tight'>
      Animated React{ " " }
      <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl'>
        Components
      </span>{ " " }
      with high end code quality
      <div
        className='inline-block animate-rocket'
      >
        <motion.p
          initial={ { opacity: 1 } }
          animate={ { y: -500, x: 800, transition: { duration: 1, delay: 3 } } }
        >🚀</motion.p>
      </div>

    </h1 >
  );
}

export default HeroTitle;
