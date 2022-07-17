import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";

type Props = {
  components: Component[];
};

const Home = (components: Props) => {
  return <section className="flex"></section>;
};

export const getStaticProps: GetStaticProps = async () => {
  const components = allComponents.map((component) =>
    pick(component, ["title", "description", "image", "date", "tags"])
  );

  return { props: { components } };
};

export default Home;
