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
        return normalizedTipName.includes(searchText) ? tip : "";
    });

    return (
        <div className="grid py-24">
            <Sidebar tips={tips} />
            <div className="">
                {filteredTips.map((tip) => (
                    <CodeContainer key={tip.id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default HomeTips;
