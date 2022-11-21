import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import hljs from 'highlight.js'
import "highlight.js/styles/vs2015.css"
import { useEffect } from 'react'



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
        .use(require('markdown-it-github-headings'))
        .use(html5Media)
        .use(require("markdown-it-sup"))
        .use(require("markdown-it-sub"))
        .use(require("markdown-it-kbd"))
        .use(require("markdown-it-iframe"), { allowfullscreen: true })

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
        for (var i = 0, len = links.length; i < len; i++) {
            links[i].target = "_blank";
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            hljs.highlightAll();
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Zoclhas | Blog • {frontmatter.title}</title>
                <meta property="og:title" content={`${frontmatter.title}`} />
                <meta
                    property="og:url"
                    content={`https://blog.zochy.xyz/${frontmatter.url}`}
                />
                <meta
                    property="og:description"
                    content={frontmatter.metaDesc}
                />
                <meta
                    property="og:image"
                    content={`https://blog.zochy.xyz/${frontmatter.socialImage}`}
                />
                <meta name="description" content={frontmatter.metaDesc} />
                <meta name="theme-color" content="#ffeacb" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <article className="prose prose-img:rounded-xl">
                <p className="date">{frontmatter.date}</p>
                <h1>{frontmatter.title}</h1>
                <img src={`/${frontmatter.socialImage}`} />
                <div
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                />
            </article>
        </div>
    );
}
