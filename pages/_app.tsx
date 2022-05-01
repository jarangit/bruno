import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import LayoutWrapper from "../components/layout/layoutWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper {...pageProps} >
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
