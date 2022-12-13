import { createTheme, NextUIProvider, Container } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/main.css";

function MyApp({ Component, pageProps }) {
    const lightTheme = createTheme({
        type: "light",
        theme: {},
    });

    const darkTheme = createTheme({
        type: "dark",
        theme: {},
    });

    return (
        <NextThemesProvider
            defaultTheme="dark"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>
                <Header />
                <Container as="main">
                    <Component {...pageProps} />
                </Container>
                <Footer />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
