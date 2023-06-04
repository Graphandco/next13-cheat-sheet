"use client";
import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { routeros } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { ThemeContext } from "@/context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeContainer = ({ tip }) => {
    const { content, name } = tip;
    const { mode } = useContext(ThemeContext);

    const theme = mode === "dark" ? dracula : routeros;

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

    return (
        <>
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
                    <div className="bg-contrast5 rounded-t-2xl flex items-center justify-between py-3 px-5">
                        <div className="text-lg text-primary font-semibold tracking-wide">{name}</div>
                        <div className="flex align-center gap-3 text-contrast text-lg ">
                            <FaRegCopy className="hover:text-primary cursor-pointer transition-all" onClick={copyCode} />
                            <BsShare className="hover:text-primary cursor-pointer transition-all" onClick={shareCode} />
                        </div>
                    </div>
                    <div className="p-3 opacity-70">
                        <SyntaxHighlighter language="css" style={theme}>
                            {content}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CodeContainer;
