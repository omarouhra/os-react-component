import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { LangProvider } from "@/context/lang-context";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <LangProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LangProvider>
    </ThemeProvider>
  );
}

export default MyApp;
