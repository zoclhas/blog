import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import "../styles/main.css";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    console.log(router.asPath);

    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <Header pageLink={router.asPath !== "/" && router.asPath} />
            <Component {...pageProps} />
            <Analytics />
            <div style={{ height: "1rem" }}></div>
            <Footer pageLink={router.asPath !== "/" && router.asPath} />
        </>
    );
}
