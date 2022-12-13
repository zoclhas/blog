import { Container, Link, Text } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <Container
                css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                <Text css={{ display: "flex", alignItems: "center" }}>
                    Made by &nbsp;{" "}
                    <Link color="secondary" href="https://zochy.xyz">
                        Zoclhas
                    </Link>
                </Text>
                <Text css={{ display: "flex", alignItems: "center" }}>
                    View source on &nbsp;
                    <Link
                        isExternal
                        block
                        color="inherit"
                        href="https://github.com/zoclhas/blog"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </Link>
                </Text>
            </Container>
        </footer>
    );
}
