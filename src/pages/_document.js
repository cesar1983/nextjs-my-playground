import Document, { Html, Head, Main, NextScript } from "next/document";

import Analytics from "../components/Analytics";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* <link
            rel="preload"
            href="/fonts/poppins-v9-latin-regular.woff2"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
