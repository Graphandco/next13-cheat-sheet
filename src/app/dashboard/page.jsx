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
import Contributions from "@/components/dashboard/Contributions";

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
    const { data: allData } = useSWR(`/api/tips`, fetcher);

    // console.log(session.data.user);

    if (session.status === "loading") {
        return <span className="loading loading-dots loading-lg ml-8"></span>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    if (session.status === "authenticated") {
        return (
            <div className="py-32">
                {/* <button className="btn btn-active btn-primary">Primary</button>
                <CldUploadButton /> */}
                <div className="title-xl mb-2">Tableau de bord</div>
                <div className="grid grid-cols-[2fr_1fr] gap-6 py-5">
                    <TipsList isLoading={isLoading} tips={data} mutate={mutate} />
                    <UserInfos user={session.data.user} />
                </div>
                <div className="grid">
                    <Contributions tips={allData} />
                </div>
            </div>
        );
    }
};

export default Dashboard;
