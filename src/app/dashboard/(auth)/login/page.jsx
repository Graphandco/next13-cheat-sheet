"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
    const session = useSession();
    const router = useRouter();
    const params = useSearchParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setError(params.get("error"));
        setSuccess(params.get("success"));
    }, [params]);

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <div className="py-20 flex flex-col items-center">
            <div className="text-primary mt-10 mb-2">{success ? success : "Content de vous revoir !"}</div>
            <h2 className="font-title text-contrast text-lg mb-10">Merci de vous connecter pour accéder au tableau de bord.</h2>

            <form onSubmit={handleSubmit} className="grid gap-5">
                <input type="text" placeholder="Email" required className="input bg-contrast w-72" />
                <input type="password" placeholder="Mot de passe" required className="input bg-contrast w-72" />
                <button className="btn btn-primary">S'identifier</button>
                {error && <div>Erreur : {error}</div>}
            </form>
            {/* <button
                onClick={() => {
                    signIn("google");
                }}
                className={styles.button + " " + styles.google}
            >
                Login with Google
            </button> */}
            <span className="text-contrast my-3">- OU -</span>
            <Link className={styles.link} href="/dashboard/register">
                <button className="btn btn-primary btn-outline">Créer un compte</button>
            </Link>
            {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
        </div>
    );
};

export default Login;
