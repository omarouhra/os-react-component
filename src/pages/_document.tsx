import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:title' content='os components 🚀' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://os-c.vercel.app/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:image' content='/og.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
