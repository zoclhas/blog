import { getAllPosts } from "../src/api";
import { Card } from "../components/card/Card";

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
