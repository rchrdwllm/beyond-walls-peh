import type { AppProps } from "next/app";

import "styles/globals.scss";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Layout from "components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
