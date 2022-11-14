import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "../components/Layout";

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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
