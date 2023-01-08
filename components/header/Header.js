import Link from "next/link";
import { useState } from "react";

import header from "./header.module.css";

export const Header = ({ pageLink }) => {
    const copyDiscord = (link) => {
        navigator.clipboard.writeText(`https://zocs.space${pageLink}`);
    };
    return (
        <nav style={pageLink ? { maxWidth: "1200px" } : {}}>
            <div className={header.navbar}>
                <Link
                    href="/"
                    className={["no-underline", `${header["h-xs"]}`].join(" ")}
                >
                    <h2>Zoclhas | Blog</h2>
                </Link>
                <Link
                    href="/"
                    className={["no-underline", `${header["s-xs"]}`].join(" ")}
                >
                    <h2>Blog</h2>
                </Link>
                {pageLink && (
                    <Link href={pageLink} onClick={() => copyDiscord(pageLink)} style={{textAlign: "end"}}>
                        {pageLink}
                    </Link>
                )}
            </div>
        </nav>
    );
};
