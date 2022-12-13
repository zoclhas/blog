import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Card, Text, Grid, Spacer, useTheme, Button } from "@nextui-org/react";

import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

// import CopyButtonPlugin from "highlightjs-copy";

const markdownItAttrs = require("markdown-it-attrs");
const { html5Media } = require("markdown-it-html5-media");
const md = () =>
    require("markdown-it")()
        .use(markdownItAttrs, {
            leftDelimiter: "{",
            rightDelimiter: "}",
            allowedAttributes: [],
        })
        .use(require("markdown-it-anchor").default)
        .use(require("markdown-it-github-headings"))
        .use(html5Media)
        .use(require("markdown-it-sup"))
        .use(require("markdown-it-sub"))
        .use(require("markdown-it-kbd"))
        .use(require("markdown-it-iframe"), { allowfullscreen: true });

export async function getStaticPaths() {
    const files = fs.readdirSync("posts");
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function PostPage({ frontmatter, content }) {
    if (typeof document !== "undefined") {
        var links = document.getElementsByClassName("ext");
        console.log(links);
        for (var i = 0, len = links.length; i < len; i++) {
            links[i].setAttribute("target", "_blank");
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            hljs.highlightAll();
        }
    }, []);

    const [copyColor, setCopyColor] = useState("secondary");
    const { isDark } = useTheme();
    const router = useRouter();

    function getLink() {
        const getLinkText =
            document.getElementsByClassName("nextui-button-text")[0];

        console.log(getLinkText + "mew");

        navigator.clipboard.writeText("https://zocs.space" + router.asPath);
        setCopyColor("success");

        setTimeout(() => {
            setCopyColor("secondary");
        }, 1000);
    }

    return (
        <div>
            <Head>
                <title>Zoclhas | Blog • {frontmatter.title}</title>
                <link
                    rel="icon"
                    href={isDark ? "/favicon-dark.ico" : "/favicon-light.ico"}
                />
                <meta property="og:title" content={`${frontmatter.title}`} />
                <meta
                    property="og:url"
                    content={`https://zocs.space/${frontmatter.url}`}
                />
                <meta
                    property="og:description"
                    content={frontmatter.metaDesc}
                />
                <meta
                    property="og:image"
                    content={`https://zocs.space/${frontmatter.socialImage}`}
                />
                <meta name="description" content={frontmatter.metaDesc} />
                <meta name="theme-color" content="#001c1a" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <article className="prose prose-img:rounded-xl">
                <Spacer y={3} />
                <Card variant="bordered">
                    <Card.Header css={{ justifyContent: "space-between" }}>
                        <Text color="$accents8">{frontmatter.date}</Text>
                        <Button
                            size="sm"
                            flat
                            color={copyColor}
                            onPress={getLink}
                        >
                            Get Link
                        </Button>
                    </Card.Header>
                    <Card.Divider />
                    <Grid.Container>
                        <Grid
                            sm={6}
                            xs={12}
                            css={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            className="info-card"
                        >
                            <Text
                                h1
                                css={{
                                    textAlign: "center",
                                }}
                            >
                                {frontmatter.title}
                            </Text>
                        </Grid>
                        <Grid sm={6} xs={12}>
                            <img
                                src={`/${
                                    isDark
                                        ? frontmatter.socialImage
                                        : frontmatter.lightImage
                                }`}
                                style={{ borderRadius: "0" }}
                            />
                        </Grid>
                    </Grid.Container>
                </Card>
                <Spacer y={3} />
                <div
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                />
            </article>
        </div>
    );
}
