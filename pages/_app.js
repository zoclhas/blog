import { Header } from "../components/header/Header";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

import "../styles/main.css";

export default function App({ Component, pageProps }) {
    const { asPath } = useRouter();

    return (
        <>
            <Header pageLink={asPath !== "/" && asPath} />
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}
