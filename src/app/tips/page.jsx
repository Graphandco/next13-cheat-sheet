import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//     const res = await fetch("http://localhost:3000/api/tips", {
//         cache: "no-store",
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// }

const Tips = () => {
    // const data = await getData();
    return (
        <div className="">
            {/* {data.map((item) => (
                <Link href={`/tips/${item._id}`} className={styles.container} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.name}</h1>
                        <p className={styles.desc}>{item.content}</p>
                    </div>
                </Link>
            ))} */}
        </div>
    );
};

export default Tips;
