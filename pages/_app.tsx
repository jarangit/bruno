import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutWrapper from "../components/layout/layoutWrapper";
import { wrapper } from "../redux/store";
import { Provider } from 'react-redux'
import { CookiesProvider } from "react-cookie"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    //   <LayoutWrapper {...pageProps} >
    //     <Component {...pageProps} />
    //   </LayoutWrapper>
    // </Provider>
    <CookiesProvider>
      <LayoutWrapper {...pageProps} >
        <Component {...pageProps} />
      </LayoutWrapper>
    </CookiesProvider>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);