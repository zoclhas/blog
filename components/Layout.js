import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="container mx-auto flex-1">{children}</main>
        </div>
    );
}
