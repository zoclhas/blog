import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../components/Layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import "../styles/main.css";

const lightTheme = createTheme({
    type: "light",
    theme: {},
});

const darkTheme = createTheme({
    type: "dark",
    theme: {},
});

function MyApp({ Component, pageProps }) {
    return (
        <NextThemesProvider
            defaultTheme="light"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>
                <Head>
                    <title>Zoclhas | Blog</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                    <Analytics />
                </Layout>
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
