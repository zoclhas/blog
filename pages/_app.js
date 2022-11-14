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
                    <meta property="og:title" content="Zoclhas | Blog" />
                    <meta property="og:url" content="https://blog.zochy.xyz" />
                    <meta
                        property="og:description"
                        content="Personal blogging site by Zoc. Random updates, thoughts on stuff and more!"
                    />
                    <meta
                        property="og:image"
                        content={`https://blog.zochy.xyz/images/blog-1.png`}
                    />
                    <meta name="description" content="Personal blogging site by Zoc. Random updates, thoughts on stuff and more!" />
                    <meta name="theme-color" content="#ffeacb" />
                    <meta name="twitter:card" content="summary_large_image" />
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
