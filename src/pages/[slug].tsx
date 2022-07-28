import React from "react";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { allComponents, Component } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponents";
import ComponentPreview from "@/components/ComponentPreview";
import { useLanguageContext } from "@/context/lang-context";

function Preview({ component }: { component: Component }) {
  const { language, setLanguage, codeLanguage } = useLanguageContext();

  const Component = useMDXComponent(component?.body.code);
  const Code = useMDXComponent(component?.[codeLanguage].body.code);

  console.log(language);

  return (
    <div className='animate-fade-in-up'>
      <section className='py-12'>
        <AnimatedHeroTitle slug={component?.slug} />
      </section>

      <ComponentPreview
        fileName={component.slug}
        title={component.title}
        preview={<Component components={{ ...MDXComponents }} />}
      >
        <Code />
      </ComponentPreview>
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
