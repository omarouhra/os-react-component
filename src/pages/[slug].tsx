import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { allComponents, Component } from "contentlayer/generated";
import ComponentPreview from "@/components/ComponentPreview";

function Preview({
  components,
  slug,
}: {
  components: Component[];
  slug: string;
}) {
  return (
    <div className='animate-fade-in-up'>
      <section className='py-12'>
        <AnimatedHeroTitle componentTitle={ components[0].title } />
      </section>

      { components.map((component) => (
        <ComponentPreview component={ component } key={ component.slug } />
      )) }
    </div>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const components = allComponents.filter((component) =>
    component.slug.startsWith(params.slug)
  );

  return { props: { components, slug: params.slug } };
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
