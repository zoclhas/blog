import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../components/Layout";
import Head from "next/head";

import ThemeSwitch from "../components/ThemeSwitch";

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
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ThemeSwitch />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
