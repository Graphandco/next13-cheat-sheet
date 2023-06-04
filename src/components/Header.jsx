"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    // {
    //     id: 2,
    //     title: "Portfolio",
    //     url: "/portfolio",
    // },
    // {
    //     id: 3,
    //     title: "Blog",
    //     url: "/blog",
    // },
    // {
    //     id: 4,
    //     title: "About",
    //     url: "/about",
    // },
    // {
    //     id: 5,
    //     title: "Contact",
    //     url: "/contact",
    // },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
    // {
    //     id: 7,
    //     title: "Tips",
    //     url: "/tips",
    // },
];

const Header = () => {
    const session = useSession();

    return (
        <header className="main-header fixed left-0 right-0 top-0 isolate z-10">
            <div className="container flex justify-between items-center py-5">
                <Link href="/" className="text-contrast font-bold text-xl uppercase">
                    Cheat Sheets
                </Link>
                <div className="flex items-center gap-5">
                    <DarkModeToggle />
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} className="hover:text-primary transition-all">
                            {link.title}
                        </Link>
                    ))}
                    {/* {session.status === "authenticated" && (
                        <button  onClick={signOut}>
                            Logout
                        </button>
                    )} */}
                </div>
            </div>
        </header>
    );
};

export default Header;
