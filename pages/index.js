import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

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
		<div>
			<Head>
				<title>Zoclhas | Blog</title>
				<meta property="og:title" content="Zoclhas | Blog" />
				<meta
					property="og:url"
					content="https://blog.zochy.xyz/"
				/>
				<meta
					property="og:description"
					content="A kinda update, blogging and other random stuff I want to share."
				/>
				<meta
					property="og:image"
					content="https://blog.zochy.xyz/images/blog-1.png"
				/>
				<meta name="description" content="A kinda update, blogging and other random stuff I want to share." />
				<meta name="theme-color" content="#ffeacb" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Grid.Container css={{ marginTop: "1rem" }} className="home-posts">
				{posts.map(({ slug, frontmatter }) => (
					<Grid sm={6} xs={12} key={slug}>
						<Card
							onClick={() => router.push(`/post/${slug}`)}
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
		</div>
	);
}
