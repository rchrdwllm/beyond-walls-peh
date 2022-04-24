import type { AppProps } from "next/app";

import "styles/globals.scss";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { install } from "resize-observer";

import Layout from "components/Layout";

if (typeof window !== "undefined") {
    install();
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
