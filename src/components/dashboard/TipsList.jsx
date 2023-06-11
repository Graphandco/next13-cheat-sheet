import Link from "next/link";
import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";
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
        <div>
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
            <div className="border border-contrast10 py-5 px-8 rounded-lg">
                <div className="font-title text-primary text-xl mb-3">Mes Tips</div>
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
                                <button className="btn btn-primary btn-sm" onClick={() => handleDelete(tip._id, tip.name)}>
                                    <FaPen />
                                    <div className="uppercase">Éditer</div>
                                </button>
                                <button className="btn btn-primary btn-sm btn-outline" onClick={() => handleDelete(tip._id, tip.name)}>
                                    <FaTrash />
                                    <div className="uppercase">Supprimer</div>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TipsList;
