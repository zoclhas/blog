import { useTheme, Card } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Head from "next/head";

// import SunIcon from "../Icons/SunIcon";
// import MoonIcon from "../Icons/MoonIcon";

export default function ThemeSwitch() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    if (typeof document !== "undefined") {
        const themeWrapper = document.querySelector("#theme-wrapper");
        const currentTheme = localStorage.getItem("theme");

        if (!currentTheme || currentTheme === "light") {
            themeWrapper.setAttribute("data-theme", "light");
        } else if (currentTheme === "dark") {
            themeWrapper.setAttribute("data-theme", "dark");
        }
    }

    return (
        <div>
            <Head>
                <link
                    rel="icon"
                    href={type === "light" ? "/favicon-light.ico" : "/favicon-dark.ico"}
                />
            </Head>
            <Card
                id="theme-wrapper"
                className="header-btn"
                data-theme="light"
                isPressable
            >
                <Card.Header>
                    <input
                        type="checkbox"
                        id="theme-switch"
                        onChange={(e) =>
                            setTheme(e.target.checked ? "dark" : "light")
                        }
                        checked={isDark}
                    />
                    <label htmlFor="theme-switch">
                        <svg
                            fill="var(--foreground)"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="50"
                            height="50"
                            id="theme-sun"
                            style={{ position: "relative", top: "3px" }}
                        >
                            <path d="M24.906 3.969c-.043.008-.086.02-.125.031A1.002 1.002 0 0 0 24 5v6c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V5a1 1 0 0 0-1.094-1.031Zm-14.25 5.875a.994.994 0 0 0-.781.703c-.105.367.004.758.281 1.015l4.25 4.25c.242.297.63.434 1.004.348.371-.086.664-.379.75-.75a1.004 1.004 0 0 0-.348-1.004l-4.25-4.25a1.004 1.004 0 0 0-.812-.312h-.094Zm28.375 0a1.005 1.005 0 0 0-.593.312l-4.25 4.25a1.004 1.004 0 0 0-.348 1.004c.086.371.379.664.75.75.375.086.762-.05 1.004-.348l4.25-4.25a1 1 0 0 0-.813-1.719ZM24.906 15a.88.88 0 0 0-.093.031 1.044 1.044 0 0 0-.188.031l-.031.032C19.289 15.32 15 19.64 15 25c0 5.504 4.496 10 10 10s10-4.496 10-10c0-5.34-4.254-9.645-9.531-9.906-.035 0-.059-.031-.094-.031a.967.967 0 0 0-.313-.063h-.156Zm.032 2h.156A8.001 8.001 0 0 1 33 25c0 4.422-3.578 8-8 8-4.418 0-8-3.578-8-8a8 8 0 0 1 7.938-8Zm-20.22 7c-.55.078-.937.59-.859 1.14.079.551.59.938 1.141.86h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496H4.719Zm34 0c-.55.078-.937.59-.859 1.14.078.551.59.938 1.141.86h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-6.281ZM15 33.875a1.005 1.005 0 0 0-.594.313l-4.25 4.25a1.004 1.004 0 0 0-.347 1.003c.086.371.379.664.75.75.375.086.761-.05 1.004-.347l4.25-4.25a1.002 1.002 0 0 0-.719-1.719H15Zm19.688 0a.994.994 0 0 0-.782.703c-.105.367.004.758.282 1.016l4.25 4.25a1.002 1.002 0 0 0 1.753-.403 1.004 1.004 0 0 0-.347-1.004l-4.25-4.25a1 1 0 0 0-.719-.312h-.187Zm-9.782 4.094c-.043.008-.086.02-.125.031A1.002 1.002 0 0 0 24 39v6c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879v-6a1 1 0 0 0-1.094-1.031Z" />
                        </svg>
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 96 96"
                            fill="var(--foreground)"
                            id="theme-moon"
                            style={{ position: "relative", top: "3px" }}
                        >
                            <path d="M35.3 14.5c-6.2 3.1-13.7 10.9-16.6 17.3-1.8 3.8-2.2 6.6-2.2 14.2 0 8.4.3 10.2 2.8 15.1 5 10.3 16.6 18.4 28 19.6 12.2 1.2 25.1-4.7 31.9-14.8C85.9 56 85 52.3 76.8 56c-5 2.3-14.5 2.6-19.9.6-14.4-5.1-20.4-22.1-13-37 1.6-3.3 2.7-6.4 2.5-6.8-1-1.6-6.1-.8-11.1 1.7zm2.7 4.9c0 .3-.5 1.7-1 3.2-.6 1.5-1.1 5.9-1.1 9.7-.1 18 14.6 31.6 32.8 30.5l7.2-.5-1.9 2.8C69 72 57.2 76.7 47.5 75.7 36.6 74.6 25.8 66 22.4 55.8c-2.2-6.7-1.5-17.7 1.4-23.4 2.7-5.3 14.2-15.8 14.2-13z" />
                        </svg>
                    </label>
                </Card.Header>
            </Card>
        </div>
    );
}
