"use client";
import CodeContainer from "@/components/CodeContainer";
import React, { useContext } from "react";
import { SearchTextContext } from "@/context/SearchText";
import Sidebar from "./Sidebar";

const HomeTips = ({ tips }) => {
    const { searchText } = useContext(SearchTextContext);

    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    const filteredTips = tips.filter((tip) => {
        normalizeText(searchText);
        const normalizedTipName = normalizeText(tip.name);
        return normalizedTipName.includes(searchText) || tip.tags.includes(searchText) ? tip : "";
    });

    return (
        <div className="grid py-24">
            <Sidebar tips={tips} />
            <div className=" pl-52">
                <div className="flex justify-end italic text-contrast mr-1">
                    {filteredTips.length} tip{filteredTips.length > 1 && "s"}
                </div>
                {filteredTips.map((tip) => (
                    <CodeContainer key={tip.id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default HomeTips;
