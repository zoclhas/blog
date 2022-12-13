import { Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

import ThemeSwitch from "./ThemeSwitch";

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="container">
            <div className="wrapper-main">
                <Card
                    className="card-shadow"
                    isPressable
                    css={{ marginBottom: "1rem" }}
                >
                    <Card.Body>
                        <span>
                            Site has moved to{" "}
                            <a href="https://zocs.space">zocs.space</a>- There
                            will be no updates further on here. Thank you for
                            everything!
                        </span>
                    </Card.Body>
                </Card>
                {router.pathname === "/" ? (
                    <header>
                        <Card className="header-title">
                            <Card.Header>
                                <Text h3>Latest Posts</Text>
                            </Card.Header>{" "}
                        </Card>
                        <ThemeSwitch />
                        <Card
                            as="a"
                            className="card-shadow header-btn"
                            href="https://zochy.xyz"
                        >
                            <Card.Header>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="var(--foreground)"
                                    viewBox="0 0 35 35"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2.507 10.618a1.094 1.094 0 0 1 0-1.549l8.75-8.75a1.094 1.094 0 1 1 1.549 1.549L5.922 8.75h21.422a5.469 5.469 0 0 1 5.469 5.469v17.5a1.094 1.094 0 0 1-2.188 0v-17.5a3.281 3.281 0 0 0-3.281-3.281H5.922l6.884 6.882a1.094 1.094 0 1 1-1.549 1.549l-8.75-8.75z"
                                    />
                                </svg>
                            </Card.Header>
                        </Card>
                    </header>
                ) : (
                    <header
                        style={{
                            justifyContent: "flex-end",
                            position: "sticky",
                            top: "1rem",
                        }}
                    >
                        <ThemeSwitch />
                        <Card
                            className="home card-shadow"
                            onClick={() => {
                                router.push("/");
                            }}
                            isPressable
                        >
                            <Card.Header>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    viewBox="0 0 35 35"
                                >
                                    <path d="M19.047 3.281a2.188 2.188 0 0 0-3.093 0L1.413 17.819a1.094 1.094 0 0 0 1.549 1.549L17.5 4.828l14.538 14.54a1.094 1.094 0 0 0 1.549-1.549l-5.149-5.147V5.469a1.094 1.094 0 0 0-1.094-1.094h-2.188a1.094 1.094 0 0 0-1.094 1.094v2.828l-5.015-5.016Z" />
                                    <path d="m17.5 7.203 13.125 13.125v9.203a3.281 3.281 0 0 1-3.281 3.281H7.656a3.281 3.281 0 0 1-3.281-3.281v-9.203L17.5 7.203Z" />
                                </svg>
                            </Card.Header>
                        </Card>
                    </header>
                )}
                <main className="posts">{children}</main>
            </div>
        </div>
    );
}
