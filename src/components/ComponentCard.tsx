import { motion } from "framer-motion";
import Link from "next/link";

type cardType = {
  lable: string;
  gradient: string;
  link: string;
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

function ComponentCard({ lable, gradient, link }: cardType) {
  return (
    <Link href={link}>
      <motion.a
        variants={item}
        className={`flex items-center justify-center rounded-lg bg-gradient-to-r hover:shadow-xl md:h-auto  lg:hover:scale-[1.01] ${gradient}  cursor-pointer  bg-white p-[3.5px] transition duration-300 hover:shadow-2xl dark:hover:shadow-cyan-500`}
      >
        <div className='flex w-full items-center justify-center rounded-md  bg-white  py-6  dark:bg-gray-900  md:items-start md:py-10'>
          <p className='font-cal text-2xl  '>{lable}</p>
        </div>
      </motion.a>
    </Link>
  );
}

export default ComponentCard;
