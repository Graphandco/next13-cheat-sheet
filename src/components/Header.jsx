"use client";

import Link from "next/link";
import React, { useContext } from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FaPlusCircle, FaHome, FaUserCircle } from "react-icons/fa";
import SearchTip from "./SearchTip";

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
            <div className="container flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center py-5">
                <Link href="/" className="text-contrast font-bold text-xl uppercase">
                    Cheat Sheets
                </Link>
                <div className="flex items-center gap-5">
                    <SearchTip />
                    <DarkModeToggle />
                    <Link href="/" className="text-contrast hover:text-primary transition-all text-2xl">
                        <FaHome />
                    </Link>
                    <Link href="/dashboard" className="text-contrast hover:text-primary transition-all text-2xl">
                        <FaUserCircle />
                    </Link>
                    {/* {links.map((link) => (
                        <Link key={link.id} href={link.url} className="hover:text-primary transition-all">
                            {link.title}
                        </Link>
                    ))} */}
                    {session.status === "authenticated" && (
                        <Link href="/add-tip">
                            <FaPlusCircle className="text-2xl text-contrast hover:text-primary transition-all " />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
