import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import ComponentPreview from "@/components/ComponentPreview";
import React from "react";

function Preview({ slug }: any) {
  return (
    <div>
      <section className='py-12'>
        <AnimatedHeroTitle slug={slug} />
      </section>
      <section className='space-y-12 py-12'>
        <ComponentPreview />
        <ComponentPreview />
        <ComponentPreview />
      </section>
    </div>
  );
}

export default Preview;

export const getStaticProps = async ({ params }: any) => {
  // @ts-ignore
  const { slug } = params;

  return { props: { slug } };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "forms" } },
      { params: { slug: "modals" } },
      { params: { slug: "headers" } },
      { params: { slug: "carousels" } },
    ],
    fallback: false,
  };
}
