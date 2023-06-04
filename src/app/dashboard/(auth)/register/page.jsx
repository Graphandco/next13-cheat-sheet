"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const image = e.target[3].value;

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    image,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    return (
        <div className="py-28 grid justify-center">
            <h1 className="title-xl mb-5">Créer un compte</h1>
            {/* <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2> */}
            <form onSubmit={handleSubmit} className="grid gap-5">
                <input type="text" placeholder="Nom" required className="input bg-contrast w-72" />
                <input type="text" placeholder="Email" required className="input bg-contrast w-72" />
                <input type="password" placeholder="Mot de passe" required className="input bg-contrast w-72" />
                <input type="text" placeholder="Image" required className="input bg-contrast w-72" />
                <button className="btn btn-primary w-72">Créer un compte</button>
                {error && "Something went wrong!"}
            </form>
            <div className="flex flex-col items-center w-72">
                <span className="text-contrast my-3">- OU -</span>
                <Link className={styles.link} href="/dashboard/login">
                    <button className="btn btn-primary btn-outline">S'identifier</button>
                </Link>
            </div>
        </div>
    );
};

export default Register;
