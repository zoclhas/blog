import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

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
    return (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2">
            {posts.map(({ slug, frontmatter }) => (
                <div className="home-posts">
                    <div key={slug} className="card card-shadow">
                        <a href={`/post/${slug}`}>
                            <Image
                                width={650}
                                height={340}
                                alt={frontmatter.title}
                                src={`/${frontmatter.socialImage}`}
                            />
                            <h1 className="p-4">{frontmatter.title}</h1>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
