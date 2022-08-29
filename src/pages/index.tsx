import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import HeroTitle from "@/components/HeroTitle";
import Contributor from "@/components/Contributor";
import ComponentCard from "@/components/ComponentCard";
import { motion } from "framer-motion";

type Props = {
  components: Component[];
};


const OSCOMPONENTS = [
  {
    lable: 'Titles',
    link: '/text',
    gradient: 'from-[#D8B4FE] to-[#818CF8]'
  },
  {
    lable: 'Splash screens',
    link: '/splash',
    gradient: 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
  },
  {
    lable: 'Titles',
    link: '/text',
    gradient: 'from-[#D8B4FE] to-[#818CF8]'
  },
  {
    lable: 'Splash screens',
    link: '/splash',
    gradient: 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
  },
  {
    lable: 'Titles',
    link: '/text',
    gradient: 'from-[#D8B4FE] to-[#818CF8]'
  },
  {
    lable: 'Splash screens',
    link: '/splash',
    gradient: 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
  },
]


const container = {

  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const Home = (components: Props) => {
  return (
    <div className='animate-fade-in-up'>
      <section className='py-12 '>
        <HeroTitle />
        <p className='text-sm font-light text-gray-500 dark:text-gray-300 md:max-w-md md:text-base'>
          JS/TS, Responsive, Semantique HTML, Accessibilty(A11y) No packages,
          Dark/Light mode
        </p>
      </section>

      <section className='py-12 '>
        <h2 className='mb-4 font-cal text-xl dark:text-white md:text-2xl'>
          Featured Components:
        </h2>
        <p className=' mb-4 max-w-2xl text-sm font-light leading-normal text-gray-500 dark:text-gray-300'>
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
        </p>
        <motion.div
          variants={ container }
          initial="hidden"
          animate="show"
          className='grid w-full grid-cols-1 gap-10 rounded-xl py-8  md:grid-cols-3'>
          { OSCOMPONENTS.map(({ lable, link, gradient }, index) => (
            <ComponentCard key={ index } gradient={ gradient } lable={ lable } link={ link } />
          )) }
        </motion.div>
      </section>

      <section className='py-12 '>
        <h2 className='mb-4 font-cal text-xl dark:text-white md:text-2xl'>
          Contributors:
        </h2>

        <div className='flex flex-col  items-start justify-between md:flex-row md:items-center md:space-x-6'>
          <Contributor
            name='Omar Ouhra'
            role='Frontend Engineer  at Obytes'
            src='/contributors/omarouhra.webp'
          />
          <Contributor
            name='Imad Atyat'
            role='Frontend Engineer  at Obytes'
            src='/contributors/imadatyat.webp'
          />
        </div>
      </section>
    </div >
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const components = allComponents.map((component) =>
    pick(component, ["title", "description", "image", "date", "tags"])
  );

  return { props: { components } };
};

export default Home;
