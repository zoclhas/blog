import { Sidebar } from "../../components/post-info/sidebar";
import MDX from "@mdx-js/runtime";
import Head from "next/head";
import { useRouter } from "next/router";

import { getPostBySlug, getAllPosts } from "../../src/api";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

export default function Post({ post }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            hljs.highlightAll();
        }
    }, []);

    headings.length = 0;

    const Heading2 = ({ children }) => {
        const idText = children.replace(/ /g, "-").toLowerCase();

        headings.splice(0, 0, {
            title: children,
            link: idText,
        });

        return (
            <a href={`#${idText}`} className="no-underline">
                <h2 id={idText}>{children}</h2>
            </a>
        );
    };

    const components = { h2: Heading2, h1: "h2" };

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Blog • {post.title}</title>
                <meta property="og:title" content={`${post.title}`} />
                <meta
                    property="og:url"
                    content={`https://zocs.space${router.asPath}`}
                />
                <meta property="og:description" content={post.description} />
                <meta
                    property="og:image"
                    content={`https://zocs.space${post.coverImage}`}
                />
                <meta name="description" content={post.description} />
                <meta name="theme-color" content="#ffedc2" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className="container posts">
                <Sidebar
                    postImage={post.coverImage}
                    postTitle={post.title}
                    postDate={post.date}
                />
                <article
                    className="prose dark:prose-invert prose-img:rounded-xl prose-slate max-w-none"
                    style={{ maxWidth: "864px" }}
                >
                    <MDX components={components}>{post.content}</MDX>
                </article>
            </main>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "content",
        "coverImage",
    ]);

    return {
        props: { post },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: { ...post },
            };
        }),
        fallback: false,
    };
}

export const headings = [];
