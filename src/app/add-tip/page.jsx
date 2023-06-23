"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTip = () => {
    const session = useSession();
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(`/api/tips?username=${session?.data?.user.name}`, fetcher);
    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const category = e.target[1].value;
        const content = e.target[2].value;
        const tags = e.target[3].value;

        try {
            await fetch("/api/tips", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    category,
                    content,
                    tags,
                    username: session.data.user.name,
                }),
            });
            mutate();
            notify("Tip ajouté !");
            e.target.reset();
            setTimeout(() => {
                router?.push("/");
            }, 1500);
        } catch (err) {
            console.log(err);
        }
    };

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
            <div className="pt-32  mx-auto flex flex-col items-center">
                <form className="grid gap-3" onSubmit={handleSubmit}>
                    <div className="title-xl mb-2 px-20 ">Ajouter un nouveau Tip</div>
                    <input type="text" placeholder="Nom du tip" className="text-bg input bg-contrast" />
                    {/* <input type="text" placeholder="Catégorie" className="input bg-contrast" /> */}
                    <select className="select bg-contrast text-bg">
                        <option disabled selected>
                            Catégorie
                        </option>
                        <option>Javascript</option>
                        <option>PHP</option>
                        <option>CSS</option>
                        <option>Prestashop</option>
                        <option>Meosis</option>
                    </select>
                    <textarea placeholder="Contenu du tip" className="text-bg textarea bg-contrast" cols="20" rows="8"></textarea>
                    <input type="text" placeholder="Tags (séparés par une virgule)" className="text-bg input bg-contrast" />
                    <div className="flex gap-2">
                        <Link href="/" className="grow">
                            <button className="btn btn-primary btn-outline w-full">Annuler</button>
                        </Link>
                        <button className="btn btn-primary grow">Ajouter</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddTip;
