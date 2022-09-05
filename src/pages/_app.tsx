import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import { LangProvider } from "@/context/lang-context";
import Layout from "@/components/Layout";
import NextSeo from "@/config/next-seo.config";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...NextSeo} />

      <ThemeProvider defaultTheme='system' attribute='class'>
        <LangProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LangProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
