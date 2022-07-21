import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Header from "components/Header";

type Props = {
  components: Component[];
};

const Home = (components: Props) => {
  return (
    <section>
      <Header />
      <div className='mx-auto max-w-4xl px-5 lg:px-0'>
        <section className='py-12 '>
          <h1 className='text-3xl lg:text-5xl  font-bold lg:leading-tight max-w-3xl mb-6'>
            Ready to use React{" "}
            <span className='font-extrabold text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300'>
              Components
            </span>{" "}
            with high end code quality 🚀
          </h1>

          <p className='text-sm font-light max-w-xs text-gray-500'>
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
