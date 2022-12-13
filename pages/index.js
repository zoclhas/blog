import fs from "fs";
import matter from "gray-matter";
import {
    Card,
    Image,
    Text,
    useTheme,
    Spacer,
    Link as UILink,
    Button,
} from "@nextui-org/react";
import Link from "next/link";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export async function getStaticProps() {
    const files = fs.readdirSync("posts");

    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}

export default function Home({ posts }) {
    for (let post of posts) {
        // Split the date by the slash, resulting in an array of [ '03', '03', '2022' ], for example
        let dateArr = post.frontmatter.date.split("-");
        // Year, month, and day from the array. We subtract 1 from month, since months start counting from 0 in Javascript dates.
        let year = parseFloat(dateArr[2]);
        let month = parseFloat(dateArr[1]) - 1;
        let day = parseFloat(dateArr[0]);
        // Pass in the different components as year, month, day to get the valid date
        let articleDate = new Date(year, month, day);
        // Update the object
        post.date = articleDate;
        //tysm https://hackernoon.com/how-to-sort-an-array-by-date-in-javascript
    }
    posts.sort((a, b) => b.date - a.date);

    const latestPost = posts[0];

    console.log(latestPost.frontmatter.tags[0]);

    const { isDark } = useTheme();

    return (
        <section>
            <Head>
                <title>Zoclhas | Blog</title>
                <link
                    rel="icon"
                    href={isDark ? "/favicon-dark.ico" : "/favicon-light.ico"}
                />
                <meta property="og:title" content="Zoclhas | Blog" />
                <meta property="og:url" content="https://zocs.space/" />
                <meta
                    property="og:description"
                    content="A kinda update, blogging and other random stuff I want to share."
                />
                <meta
                    property="og:image"
                    content="https://zocs.space/meta-img.png"
                />
                <meta
                    name="description"
                    content="My place for thoughts, ideas, and creations on a
                        variety of topics, including code, insights, and maybe
                        even some art."
                />
                <meta name="theme-color" content="#001c1a" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Spacer />
            <Card variant="bordered">
                <Card.Body>
                    <span>
                        Hi! This is my <em>space</em>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                            literally
                        </span>
                        . I&apos;ll be sharing my thoughts, ideas, and creations
                        on a variety of topics, including code, insights, and
                        maybe even some art. Hope you enjoy checkout these out!
                        <Spacer />
                        You can view the v1 of my blog
                        <UILink
                            css={{ display: "inline", marginLeft: "0.5ch" }}
                            color="secondary"
                            href="https://blog.zochy.xyz"
                            target="_blank"
                            rel="noreferrer"
                            isExternal
                        >
                            here
                        </UILink>
                        .
                    </span>
                </Card.Body>
                <Card.Divider />
                <Card.Footer css={{ flexWrap: "wrap", gap: "1rem" }}>
                    <Button
                        css={{ flexGrow: "1" }}
                        flat
                        color="secondary"
                        as="a"
                        href="https://zochy.xyz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faHome} /> &nbsp; zochy.xyz
                    </Button>
                    <Button
                        css={{ flexGrow: "1" }}
                        flat
                        color="secondary"
                        as="a"
                        href="https://github.com/zochlhas"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    <Button
                        css={{ flexGrow: "1" }}
                        flat
                        color="secondary"
                        as="a"
                        href="mailto:hi@zoclhas.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Button>
                </Card.Footer>
            </Card>
            <Spacer />
            <Text h1>Latest Post{posts.length > 1 ? "s" : ""}</Text>
            <div id="posts" gap={2}>
                {posts.map(({ slug, frontmatter }, index) => (
                    <article key={slug}>
                        <Link href={`/post/${slug}`} style={{ width: "100%" }}>
                            <Card isPressable isHoverable variant="bordered">
                                <Image
                                    width={400}
                                    height={300}
                                    alt={frontmatter.title}
                                    src={
                                        isDark
                                            ? `/images/post-${
                                                  parseInt(index) + 1
                                              }/post-${
                                                  parseInt(index) + 1
                                              }-dark.png`
                                            : `/images/post-${
                                                  parseInt(index) + 1
                                              }/post-${
                                                  parseInt(index) + 1
                                              }-light.png`
                                    }
                                />
                                <Card.Divider />
                                <Card.Header>
                                    <h4>{frontmatter.title}</h4>
                                </Card.Header>
                            </Card>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
