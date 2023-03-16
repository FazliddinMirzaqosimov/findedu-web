import "@/styles/globals.css";
import type {AppProps} from "next/app";
import "@/components/Branch/accordion-branch.scss";
import {Provider} from "react-redux";
import store from "@/service/redux/store";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import Layout from "@/components/Layout";

const queryClient = new QueryClient()
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                    <Component {...pageProps} />
                    </Layout>
                    <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
                </QueryClientProvider>
            </Provider>
        </>
    );
}
