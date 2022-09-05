import ComponentCard from "@/components/ComponentCard";
import { motion } from "framer-motion";
import React from "react";

function GridComponents() {
  const OSCOMPONENTS = [
    {
      lable: "Titles",
      link: "/text",
      gradient: "from-[#D8B4FE] to-[#818CF8]",
    },
    {
      lable: "Splash screens",
      link: "/splash",
      gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
    },
    {
      lable: "Modal",
      link: "/modal",
      gradient: "from-[#a575d1] to-[#10d5eb]",
    },
    {
      lable: "Theme Button",
      link: "/theme-button",
      gradient: "from-[#D8B4FE] to-[#818CF8]",
    },
    {
      lable: "Os-component Title",
      link: "/splash",
      gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
    },
    {
      lable: "Grid Components",
      link: "/modal",
      gradient: "from-[#a575d1] to-[#10d5eb]",
    },
  ];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='grid w-full grid-cols-1 gap-10 rounded-xl py-8  md:grid-cols-3'
    >
      {OSCOMPONENTS.map(({ lable, link, gradient }, index) => (
        <ComponentCard
          key={index}
          gradient={gradient}
          lable={lable}
          link={link}
        />
      ))}
    </motion.div>
  );
}

export default GridComponents;
