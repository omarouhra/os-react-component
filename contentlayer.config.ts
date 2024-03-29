import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

const ComponentCode = defineDocumentType(() => ({
  name: "Code",
  filePathPattern: "code/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
  },
}));

const Config = defineDocumentType(() => ({
  name: "Config",
  filePathPattern: "components/**/config.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
  },
}));

const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "components/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    image: { type: "string", required: true },
    JScode: {
      type: "reference",
      of: ComponentCode,
      embedDocument: true,
      required: true,
    },
    TScode: {
      type: "reference",
      of: ComponentCode,
      embedDocument: true,
      required: true,
    },
    config: {
      type: "reference",
      of: Config,
      embedDocument: true,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Component, Config, ComponentCode],
  mdx: { rehypePlugins: [highlight] },
});
