import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import ComponentPreview from "@/components/ComponentPreview";
import { allComponents, Component } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponents";

function Preview({ component }: { component: Component }) {
  const Component = useMDXComponent(component?.body.code);

  return (
    <div>
      <section className='py-12'>
        <AnimatedHeroTitle slug={component?.slug} />
      </section>
      {/* <section className='space-y-12 py-12'>
        <ComponentPreview />
        <ComponentPreview />
        <ComponentPreview />
      </section> */}

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
