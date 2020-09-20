import "../../styles/globals.css";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
