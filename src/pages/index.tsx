import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Header from "@/components/Layout/Header";

type Props = {
  components: Component[];
};

const Home = (components: Props) => {
  return (
    <section>
      <div>
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
      </div>
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
