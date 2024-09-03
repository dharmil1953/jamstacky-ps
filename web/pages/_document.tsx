import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preload"
          href="https://cdn.sanity.io/images/jaqhm6yh/development/4363fc2caf742d290935591440f66ff70068b88d-2004x2060.png?w=640&q=100&fit=clip&auto=format"
        />
      </Head>

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
