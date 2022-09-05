const NextSeo = {
  defaultTitle: "OS components",
  titleTemplate: "%s | OS components",
  description: "",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://os-c.vercel.app/",
    site_name: "OS components",

    images: [
      {
        url: "https://os-c.vercel.app/og.png",
        height: 1200,
        width: 630,
      },
    ],
  },

  twitter: {
    // handle: "@",
    // site: "@",
    cardType: "summary_large_image",
  },
};

export default NextSeo;
