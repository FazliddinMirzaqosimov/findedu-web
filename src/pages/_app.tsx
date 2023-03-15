import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/components/Branch/accordion-branch.scss";
import { Provider } from "react-redux";
import store from "@/service/redux/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
