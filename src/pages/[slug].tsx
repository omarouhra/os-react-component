import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { allComponents, Component } from "contentlayer/generated";
import ComponentPreview from "@/components/ComponentPreview";
import { NextSeo } from "next-seo";

function Preview({
  components,
  title,
}: {
  components: Component[];
  title: string;
}) {
  return (
    <>
      <NextSeo title={title} />

      <div className='animate-fade-in-up'>
        <section className='py-12'>
          <AnimatedHeroTitle componentTitle={title} />
        </section>
        {components.map((component) => (
          <ComponentPreview component={component} key={component.slug} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const components = allComponents.filter(
    (component) => component.config.slug === params.slug
  );

  return { props: { components, title: components[0].config.title } };
};

export async function getStaticPaths() {
  return {
    paths: allComponents.map((component) => ({
      params: { slug: component.config.slug },
    })),
    fallback: false,
  };
}

export default Preview;
