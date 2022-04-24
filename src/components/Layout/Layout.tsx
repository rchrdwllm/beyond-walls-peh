import { ReactNode, useEffect } from "react";

import styles from "./Layout.module.scss";
import { useState, useRef } from "react";
import { useWidth } from "hooks/useWidth";
import dynamic from "next/dynamic";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LoadingContext from "context/LoadingContext";
import Loader from "components/Loader";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const Nav = dynamic(() => import("components/Nav"), { ssr: false });

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const width = useWidth();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <>
            <Head>
                <title>Romi Garduce Blog</title>
            </Head>
            <AnimatePresence exitBeforeEnter>
                {isLoaded ? (
                    <LocomotiveScrollProvider
                        options={{
                            smooth: true,
                        }}
                        watch={[width]}
                        containerRef={containerRef}
                    >
                        <LoadingContext.Provider
                            value={[isLoaded, setIsLoaded as any]}
                        >
                            <main
                                className={styles.main}
                                data-scroll-container
                                ref={containerRef}
                            >
                                {isLoaded ? (
                                    <>
                                        <Nav />
                                        {children}
                                    </>
                                ) : (
                                    <Loader />
                                )}
                            </main>
                        </LoadingContext.Provider>
                    </LocomotiveScrollProvider>
                ) : (
                    <Loader key="loader" />
                )}
            </AnimatePresence>
        </>
    );
};

export default Layout;
