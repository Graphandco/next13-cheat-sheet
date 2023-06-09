import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import CodeContainer from "@/components/CodeContainer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/tips/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound();
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const tip = await getData(params.id);
    return {
        name: tip.name,
        content: tip.content,
    };
}

const BlogPost = async ({ params }) => {
    const tip = await getData(params.id);
    return (
        <div className="pt-32">
            <Link href="/">
                <button className="btn btn-primary btn-sm btn-outline">
                    <FaArrowLeft />
                    <div className="uppercase">Retour à la liste</div>
                </button>
            </Link>
            <CodeContainer tip={tip} />
            {/* <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{data.name}</h1>
                        <p className={styles.desc}>{data.content}</p>
                        <div className={styles.author}>
                            <Image src={data.img} alt="" width={40} height={40} className={styles.avatar} />
                            <span className={styles.username}>{data.username}</span>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                    <Image src={data.img} alt="" fill={true} className={styles.image} />
                </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>{data.content}</p>
                </div>
            </div> */}
        </div>
    );
};

export default BlogPost;
