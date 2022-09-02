import { motion } from "framer-motion";
import React from "react";

function HeroTitle() {
  return (
    <h1 className='mb-6 max-w-3xl font-cal text-4xl dark:text-white lg:text-5xl lg:leading-tight'>
      Animated React{ " " }
      <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl'>
        Components
      </span>{ " " }
      with high end code quality
      <div
        className='inline-block animate-rocket'
      >
        <motion.p
          initial={ { opacity: 1 } }
          animate={ { rotate:[0,10,20], y: -500, x: 800, transition: { duration: 1, delay: 2 } } }
        >🚀</motion.p>
      </div>

    </h1 >
  );
}

export default HeroTitle;
