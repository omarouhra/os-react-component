import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { allComponents, Component } from "contentlayer/generated";
import ComponentPreview from "@/components/ComponentPreview";
import ViewCounter from "@/components/ViewCounter";

function Preview({
  components,
  title,
  slug,
}: {
  components: Component[];
  title: string;
  slug: string;
}) {
  return (
    <div className='animate-fade-in-up'>
      <section className='py-12'>
        <AnimatedHeroTitle componentTitle={title} />
      </section>

      <ViewCounter slug={slug} />

      {components.map((component) => (
        <ComponentPreview component={component} key={component.slug} />
      ))}
    </div>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const components = allComponents.filter(
    (component) => component.config.slug === params.slug
  );

  return {
    props: {
      components,
      title: components[0].config.title,
      slug: components[0].config.slug,
    },
  };
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
