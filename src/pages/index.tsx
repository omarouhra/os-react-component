import HeroTitle from "@/components/HeroTitle";
import Contributor from "@/components/Contributor";
import ComponentCard from "@/components/ComponentCard";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { LinkedinShare, TwitterShare } from "@/components/Share";
import ThemeButton from "@/ui/themeButton";
import GridComponents from "@/ui/GridComponents";

const Home = () => {
  return (
    <>
      <NextSeo title='Home' canonical='https://os-c.vercel.app' />
      <div className='animate-fade-in-up'>
        <section className='py-12 '>
          <HeroTitle />
          <p className='text-sm font-light text-gray-500 dark:text-gray-300 md:max-w-md md:text-base'>
            JS/TS, Responsive, Semantique HTML, Accessibilty(A11y), Framer
            Motion
            <span className='mx-2 inline-block translate-y-1'>
              <svg
                height='25'
                viewBox='3.7 3.7 43.6 43.6'
                width='25'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z'
                  fill='#59529d'
                />
                <path d='m47.3 25.5v21.8l-10.9-10.9z' fill='#5271b4' />
                <path
                  d='m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z'
                  fill='#bb4b96'
                />
              </svg>
            </span>
            , Dark/Light mode
          </p>
        </section>

        <section className='py-12 '>
          <h2 className='mb-4 font-cal text-xl dark:text-white md:text-2xl'>
            Featured Components:
          </h2>
          <p className=' mb-4 max-w-2xl text-sm font-light leading-normal text-gray-500 dark:text-gray-300'>
            Our Goal is to build the biggest component library using Next.js,
            Tailwind.css, and Framer Motion
          </p>
          <GridComponents />
        </section>

        <section className='py-12 '>
          <h2 className='mb-4 font-cal text-xl dark:text-white md:text-2xl'>
            Share the app
          </h2>

          <p className='mb-6 font-light text-gray-500 dark:text-gray-200'>
            Let your friends know about OS Component App!
          </p>

          <div className='flex items-center  space-x-4'>
            <TwitterShare />
            <LinkedinShare />
          </div>
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
              href='https://twitter.com/OuhraOmar'
            />
            <Contributor
              name='Imad Atyat'
              role='Frontend Engineer  at Obytes'
              src='/contributors/imadatyat.webp'
              href='https://twitter.com/ImadAtyat'
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
