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
    const router = useRouter();
    return (
        <Grid.Container css={{ marginTop: "1rem" }} className="home-posts">
            {posts.map(({ slug, frontmatter }) => (
                <Grid sm={6} xs={12} key={slug}>
                    <Card
                        as="a"
                        href={`/post/${slug}`}
                        className="card-shadow"
                        isPressable
                    >
                        <Image
                            width={400}
                            height={300}
                            alt={frontmatter.title}
                            src={`/${frontmatter.socialImage}`}
                            style={{ objectFit: "cover" }}
                        />
                        <Card.Divider />

                        <Card.Header>
                            <h4>{frontmatter.title}</h4>
                        </Card.Header>
                    </Card>
                </Grid>
            ))}
            <Grid sm={6} xs={12}></Grid>
            <Grid sm={6} xs={12}></Grid>
            <Grid sm={6} xs={12}></Grid>
        </Grid.Container>
    );
}
