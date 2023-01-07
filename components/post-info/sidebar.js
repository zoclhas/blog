import { useState, useEffect } from "react";
import { headings } from "../../pages/post/[slug]";
import Link from "next/link";
import Scrollspy from "react-scrollspy";

import sidebar from "./sidebar.module.css";

export const Sidebar = ({ postImage, postTitle, postDate, postHeadings }) => {
    const [headingsList, setHeadingsList] = useState([]);
    useEffect(() => {
        async function getHeadings() {
            setHeadingsList(headings.reverse());
        }
        getHeadings();
    }, []);

    return (
        <div className={sidebar.sidebar}>
            <div>
                <img src={postImage} />
                <h1>{postTitle}</h1>
                <span style={{ color: "var(--text-sub)" }}>
                    Published on {postDate}
                </span>
            </div>
            <Scrollspy
                items={["overview", "section-2", "section-3"]}
                currentClassName="active"
                className="toc"
            >
                {headingsList.map((heading, index) => (
                    <li>
                        <a href={`#${heading.link}`} key={heading.link + index}>
                            {heading.title}
                        </a>
                    </li>
                ))}
            </Scrollspy>
        </div>
    );
};
