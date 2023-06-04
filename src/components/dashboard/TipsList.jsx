import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TipsList = ({ isLoading, tips, mutate }) => {
    const handleDelete = async (id, name) => {
        if (window.confirm(`Voulez-vous vraiment supprimer le tip ${name} ?`)) {
            try {
                await fetch(`/api/tips/${id}`, {
                    method: "DELETE",
                });
                mutate();
                notify("Tip supprimé !");
            } catch (err) {
                console.log(err);
            }
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
            <div className="py-5">
                <div className="font-title text-contrast text-2xl mb-3">Mes Tips</div>
                {isLoading ? (
                    <span className="loading loading-dots loading-lg"></span>
                ) : (
                    tips?.map((tip) => (
                        <div className="flex justify-between my-2" key={tip._id}>
                            {/* <div className={styles.imgContainer}>
                                      <Image src={tip.img} alt="" width={200} height={100} />
                                  </div> */}
                            <Link href={`/tips/${tip._id}`}>
                                <h2 className="hover:text-contrast">{tip.name}</h2>
                            </Link>
                            <div className="flex gap-2 items-center">
                                <FaTrash
                                    className="text-contrast transition-all cursor-pointer hover:text-red-500"
                                    onClick={() => handleDelete(tip._id, tip.name)}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default TipsList;
