import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/components/Branch/accordion-branch.scss";
import { Provider } from "react-redux";
import store from "@/service/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname.split("/").includes("auth"));

  if (router.pathname.split("/").includes("auth")) {
    return (
      <>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools
              initialIsOpen={false}
              position={"bottom-right"}
            />
          </QueryClientProvider>
        </Provider>
      </>
    );
  }
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
