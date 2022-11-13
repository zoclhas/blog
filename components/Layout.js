import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="zb-container">
            <div className="wrapper-main">
                {router.pathname === "/" ? (
                    <header>
                        <div className="card">
                            <div className="card-header">
                                <h3>Latest Posts</h3>
                            </div>
                        </div>
                    </header>
                ) : (
                    <header
                        style={{
                            justifyContent: "flex-end",
                            position: "sticky",
                            top: "1rem",
                        }}
                    >
                        <div
                            isPressable
                            className="home card card-shadow"
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <div className="card-header">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    viewBox="0 0 35 35"
                                >
                                    <path d="M19.047 3.281a2.188 2.188 0 0 0-3.093 0L1.413 17.819a1.094 1.094 0 0 0 1.549 1.549L17.5 4.828l14.538 14.54a1.094 1.094 0 0 0 1.549-1.549l-5.149-5.147V5.469a1.094 1.094 0 0 0-1.094-1.094h-2.188a1.094 1.094 0 0 0-1.094 1.094v2.828l-5.015-5.016Z" />
                                    <path d="m17.5 7.203 13.125 13.125v9.203a3.281 3.281 0 0 1-3.281 3.281H7.656a3.281 3.281 0 0 1-3.281-3.281v-9.203L17.5 7.203Z" />
                                </svg>
                            </div>
                        </div>
                    </header>
                )}
                <main>{children}</main>
            </div>
        </div>
    );
}
