import { getAllPosts } from "../src/api";
import { Card } from "../components/card/Card";
import Head from "next/head";

export default function Home({ posts }) {
    for (let post of posts) {
        let dateArr = post.date.split("-");

        let year = parseFloat(dateArr[2]);
        let month = parseFloat(dateArr[1]) - 1;
        let day = parseFloat(dateArr[0]);

        let articleDate = new Date(year, month, day);
        post.dateDF = articleDate;
        //tysm https://hackernoon.com/how-to-sort-an-array-by-date-in-javascript
    }
    posts.sort((a, b) => b.dateDF - a.dateDF);

    return (
        <>
            <Head>
                <title>Zoclhas • Blog</title>
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
                <meta name="theme-color" content="#ffedc2" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className="container home">
                {posts.map((post, index) => (
                    <Card
                        postImage={post.coverImage}
                        postTitle={post.title}
                        postDate={post.date}
                        postDescription={post.description}
                        postSlug={post.slug}
                        key={post.title + index}
                    />
                ))}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts([
        "coverImage",
        "title",
        "date",
        "description",
        "slug",
    ]);

    return {
        props: {
            posts: posts,
        },
    };
}
