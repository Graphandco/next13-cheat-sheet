"use client";
import React, { useContext } from "react";
import { SearchTextContext } from "@/context/SearchText";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = ({ tips }) => {
    let allCatList = tips.map((item) => item.category);
    const catList = [...new Set(allCatList)].sort();
    const { setSearchText } = useContext(SearchTextContext);

    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    return (
        <div className="fixed w-48 mt-6">
            <div className="">
                {catList.map((cat, index) => {
                    return (
                        <div className="cat-collapse collapse rounded-none gap-2" key={index}>
                            <input type="checkbox" className="min-h-0" />
                            <div className="collapse-title flex items-center gap-1 text-white hover:text-primary transition-all min-h-0 p-0 font-medium capitalize">
                                {cat} <FaChevronRight className="text-xs translate-y-[2px] opacity-40" />
                            </div>
                            <div className="collapse-content border-l border-contrast10 grid gap-2 pl-0 text-sm capitalize">
                                {tips
                                    .filter(function (tip) {
                                        return tip.category === cat;
                                    })
                                    .map((tip, index) => (
                                        <p
                                            key={index}
                                            onClick={() => setSearchText(normalizeText(tip.name))}
                                            className="font-medium border-l border-contrast10 pl-4 hover:border-white hover:text-primary cursor-pointer transition-all "
                                        >
                                            {tip.name}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
