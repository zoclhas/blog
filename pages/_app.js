import { Analytics } from "@vercel/analytics/react";

import "../styles/main.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <main className="container">
                <Component {...pageProps} />
            </main>
            <Analytics />
        </>
    );
}
