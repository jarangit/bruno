import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutWrapper from "../components/layout/layoutWrapper";
import { store, wrapper } from "../redux/store";
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    //   <LayoutWrapper {...pageProps} >
    //     <Component {...pageProps} />
    //   </LayoutWrapper>
    // </Provider>
    <LayoutWrapper {...pageProps} >
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);