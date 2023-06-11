"use client";
import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { far } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { routeros } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy, FaUserCircle } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { ThemeContext } from "@/context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeContainer = ({ tip }) => {
    const { content, name, category, username } = tip;
    const { mode } = useContext(ThemeContext);
    const session = useSession();

    const theme = mode === "dark" ? far : routeros;

    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };
    let language;
    switch (normalizeText(category)) {
        case "css":
            language = "css";
            break;
        case "php":
            language = "php";
            break;
        case "javascript":
            language = "javascript";
            break;
        case "prestashop":
            language = "php";
            break;

        default:
            language = "css";
    }

    const notify = (message) =>
        toast.success(message, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });

    const copyCode = () => {
        navigator.clipboard.writeText(content);
        notify("Code copié !");
    };
    const shareCode = () => {
        // navigator.clipboard.writeText(content);
        notify("Lien du code copié !");
    };

    // if (session.status == "unauthenticated") {
    //     router?.push("/dashboard/login");
    // }

    return (
        <div className="grid gap-6 pl-52">
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <div className="flex flex-col">
                <div className="border border-contrast10 rounded-2xl">
                    {/* {session.status === "loading" && <span className="loading loading-dots loading-lg"></span>} */}

                    <div className="bg-contrast5 rounded-t-2xl flex items-center justify-between py-3 px-5">
                        <div className="text-lg text-primary font-semibold tracking-wide">{name}</div>
                        <div className="flex align-center gap-3 text-contrast text-lg ">
                            <FaRegCopy className="hover:text-primary cursor-pointer transition-all" onClick={copyCode} />
                            <BsShare className="hover:text-primary cursor-pointer transition-all" onClick={shareCode} />
                        </div>
                    </div>
                    <div className="p-3 opacity-70">
                        <SyntaxHighlighter language={language} style={theme}>
                            {content}
                        </SyntaxHighlighter>
                    </div>
                    <div className="flex justify-end gap-1 items-center pb-2 px-5 text-sm">
                        <FaUserCircle />
                        <div className="italic">{username}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeContainer;
