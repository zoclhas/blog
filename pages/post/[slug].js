import { Sidebar } from "../../components/post-info/sidebar";
import MDX from "@mdx-js/runtime";

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

    const Heading2 = ({ children }) => {
        const idText = children.replace(/ /g, "-").toLowerCase();

        headings.splice(0, 0, { title: children, link: idText });

        return (
            <a href={`#${idText}`} className="no-underline">
                <h2 id={idText}>{children}</h2>
            </a>
        );
    };

    const components = { h2: Heading2 };

    return (
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
