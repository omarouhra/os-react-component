import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
