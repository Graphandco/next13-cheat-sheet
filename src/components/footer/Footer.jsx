import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex justify-end items-center py-1">
            <div>©{currentYear} Régis</div>
            {/* <div className="flex gap-4">
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
            </div> */}
        </div>
    );
};

export default Footer;
