import { Navbar, Text, Link as UILink } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeSwitch from "../theme-switch/ThemeSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const router = useRouter();

    return (
        <Navbar variant="floating" isCompact isBordered>
            <Navbar.Brand>
                <Link href="/">
                    <Text>zocs space</Text>
                </Link>
            </Navbar.Brand>
            {router.pathname !== "/" && (
                <Navbar.Content hideIn="xs">
                    <Link
                        href="/"
                        style={{ color: "var(--nextui-colors-text)" }}
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </Navbar.Content>
            )}
            <Navbar.Content>
                <Navbar.Link color="inherit" showIn="xs">
                    <Link
                        href="/"
                        style={{ color: "var(--nextui-colors-text)" }}
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </Navbar.Link>
                <Navbar.Link
                    href="https://github.com/zoclhas"
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Navbar.Link>
                <ThemeSwitch />
            </Navbar.Content>
        </Navbar>
    );
}
