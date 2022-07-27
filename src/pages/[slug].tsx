import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { allComponents, Component } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponents";
import { useLangContext } from "@/context/lang-context";
import Link from "next/link";

function Preview({ component }: { component: Component }) {
  const Component = useMDXComponent(component?.body.code);

  const { lang, setLang } = useLangContext();

  const handleClick = () =>
    lang === "JavaScript" ? setLang("TypeScript") : setLang("JavaScript");

  return (
    <div>
      {/* <label
        htmlFor='default-toggle'
        className='relative inline-flex cursor-pointer items-center'
      >
        <input
          type='checkbox'
          value=''
          id='default-toggle'
          className='peer sr-only'
          onClick={handleClick}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Toggle me
        </span>
      </label> */}
      {/* <Link href={"/"}>
        <a className='short-transitions border-black hover:border-b dark:border-white'>
          Home/{" "}
        </a>
      </Link>
      <Link href={"/"}>
        <a className='short-transitions border-black hover:border-b dark:border-white'>
          Components/{" "}
        </a>
      </Link>
      <Link href={"/"}>
        <a className='short-transitions border-black capitalize hover:border-b dark:border-white'>
          {component?.slug}{" "}
        </a>
      </Link> */}

      <section className='py-12'>
        <AnimatedHeroTitle slug={component?.slug} />
      </section>

      <Component components={{ ...MDXComponents }} />
    </div>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const component = allComponents.find(
    (component) => component.slug === params.slug
  );

  return { props: { component } };
};

export async function getStaticPaths() {
  return {
    paths: allComponents.map((component) => ({
      params: { slug: component.slug },
    })),
    fallback: false,
  };
}

export default Preview;
