"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about_us">About As</Link>
                    {path === "/about_us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
}
