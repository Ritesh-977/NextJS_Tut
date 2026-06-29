"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import "./styles.css";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLaout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [input, setInput] = useState("");
    const pathname = usePathname();

    return (
        <div className="auth-layout">
            <div className="auth-panel">
                <div className="auth-input-wrapper">
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Search auth pages..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                <nav className="auth-nav">
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            (pathname.startsWith(link.href) && link.href !== "/");

                        return (
                            <Link
                                className={isActive ? "auth-link active" : "auth-link inactive"}
                                href={link.href}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="auth-content">{children}</div>
            </div>
        </div>
    );
}