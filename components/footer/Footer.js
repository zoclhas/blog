import footer from "./footer.module.css";

export const Footer = ({ pageLink }) => {
    return (
        <footer
            className={footer.footer}
            style={pageLink ? { maxWidth: "calc(1200px - 2rem)" } : {}}
        >
            <h5>
                View source on &nbsp;
                <a
                    href="https://github.com/zoclhas/blog"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </h5>
        </footer>
    );
};
