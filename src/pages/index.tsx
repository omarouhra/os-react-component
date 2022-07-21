import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Header from "@/components/Layout/Header";
import TechnologiesCard from "@/components/TechnologyCard";

type Props = {
  components: Component[];
};

const Home = (components: Props) => {
  return (
    <section>
      <section className='py-12 '>
        <h1 className='mb-6 max-w-3xl  text-3xl font-bold lg:text-5xl lg:leading-tight'>
          Ready to use React{" "}
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl'>
            Components
          </span>{" "}
          with high end code quality 🚀
        </h1>

        <p className='max-w-xs text-sm font-light text-gray-500'>
          JS/TS, Responsive, Semantique HTML, Accessibilty(A11y) No packages,
          Dark/Light mode{" "}
        </p>
      </section>
      <section className=' flex  w-full max-w-3xl flex-col space-y-6 py-12 md:flex-row md:justify-between md:space-y-0'>
        <TechnologiesCard
          technology='Next.js'
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#D8B4FE] to-[#818CF8]'
        />
        <TechnologiesCard
          technology='TailwindCss'
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
        />
        <TechnologiesCard
          technology='Vercel'
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
        />
      </section>

      <section className='py-12 '>
        <h2 className='mb-4 text-xl font-semibold md:text-2xl'>
          Featured Components:
        </h2>
        <p className=' mb-4 max-w-2xl text-sm font-light leading-normal text-gray-500'>
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
        </p>

        <button className='text-sm font-semibold text-gray-400'>
          See All Components &gt;
        </button>
      </section>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const components = allComponents.map(component =>
    pick(component, ["title", "description", "image", "date", "tags"])
  );

  return { props: { components } };
};

export default Home;
