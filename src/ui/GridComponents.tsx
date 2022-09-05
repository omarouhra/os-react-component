import { motion } from "framer-motion";

type cardType = {
  lable: string;
  gradient: string;
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

function ComponentCard({ lable, gradient }: cardType) {
  return (
    <motion.div
      variants={item}
      className={`flex items-center justify-center rounded-lg bg-gradient-to-r hover:shadow-xl md:h-auto  lg:hover:scale-[1.01] ${gradient}  cursor-pointer  bg-white p-[3.5px] transition duration-300 hover:shadow-2xl dark:hover:shadow-cyan-500`}
    >
      <div className='flex w-full items-center justify-center rounded-md  bg-white  py-6  dark:bg-gray-900  md:items-start md:py-10'>
        <p className='font-cal text-2xl  '>{lable}</p>
      </div>
    </motion.div>
  );
}

function GridComponents() {
  const OSCOMPONENTS = [
    {
      lable: "Titles",
      gradient: "from-[#D8B4FE] to-[#818CF8]",
    },
    {
      lable: "Splash screens",
      gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
    },
    {
      lable: "Modal",
      gradient: "from-[#a575d1] to-[#10d5eb]",
    },
    {
      lable: "Theme Button",
      gradient: "from-[#D8B4FE] to-[#818CF8]",
    },
    {
      lable: "Os-component Title",
      gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
    },
    {
      lable: "Grid Components",
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
    <div className='flex h-full w-full items-center justify-center px-4'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid w-full grid-cols-1 gap-10 rounded-xl py-8  md:grid-cols-3'
      >
        {OSCOMPONENTS.map(({ lable, gradient }, index) => (
          <ComponentCard key={index} gradient={gradient} lable={lable} />
        ))}
      </motion.div>
    </div>
  );
}

export default GridComponents;
