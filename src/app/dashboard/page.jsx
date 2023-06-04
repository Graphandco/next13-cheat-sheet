"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import UserInfos from "@/components/dashboard/UserInfos";
import TipsList from "@/components/dashboard/TipsList";

const Dashboard = () => {
    //OLD WAY TO FETCH DATA

    // const [data, setData] = useState([]);
    // const [err, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //   const getData = async () => {
    //     setIsLoading(true);
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //       cache: "no-store",
    //     });

    //     if (!res.ok) {
    //       setErr(true);
    //     }

    //     const data = await res.json()

    //     setData(data);
    //     setIsLoading(false);
    //   };
    //   getData()
    // }, []);

    const session = useSession();

    const router = useRouter();

    //NEW WAY TO FETCH DATA
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(`/api/tips?username=${session?.data?.user.name}`, fetcher);

    // console.log(session.data.user);

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
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    };

    if (session.status === "authenticated") {
        return (
            <div className="py-20">
                {/* <button className="btn btn-active btn-primary">Primary</button>
                <CldUploadButton /> */}
                <UserInfos user={session.data.user} />
                <div className="grid grid-cols-2 gap-20">
                    <div className={styles.posts}>
                        <TipsList isLoading={isLoading} tips={data} mutate={mutate} />
                    </div>

                    <form className="grid gap-5" onSubmit={handleSubmit}>
                        <div className="title-xl">Ajouter un nouveau Tip</div>
                        <input type="text" placeholder="Nom du tip" className="input bg-contrast" />
                        {/* <input type="text" placeholder="Catégorie" className="input bg-contrast" /> */}
                        <select className="select bg-contrast">
                            <option disabled selected>
                                Catégorie
                            </option>
                            <option>Javascript</option>
                            <option>PHP</option>
                            <option>CSS</option>
                            <option>Prestashop</option>
                            <option>Meosis</option>
                        </select>
                        <textarea placeholder="Contenu du tip" className="textarea bg-contrast" cols="20" rows="8"></textarea>
                        <input type="text" placeholder="Tags" className="input bg-contrast" />
                        <button className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Dashboard;
