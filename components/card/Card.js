import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import card from "./card.module.css";

export const Card = ({
    postImage,
    postTitle,
    postDate,
    postDescription,
    postSlug,
}) => {
    return (
        <div className={card.card}>
            <div className={card["card-split"]}>
                <img src={postImage} alt={postTitle + "'s cover image"} />
                <div className={card.content}>
                    <div className={card["card-header"]}>
                        <Link
                            href={`/post/${postSlug}`}
                            className="no-underline"
                        >
                            <h2>{postTitle}</h2>
                        </Link>
                        <h5>{postDate}</h5>
                    </div>
                    <div className={card["card-body"]}>
                        <p>
                            {`${postDescription}`.substring(0, 150) +
                                `${postDescription.length > 150 ? "..." : ""}`}
                        </p>
                    </div>
                    <div className={card["card-footer"]}>
                        <Link
                            href={`/post/${postSlug}`}
                            className="no-underline"
                        >
                            Read <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
