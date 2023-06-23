import Link from "next/link";
import React from "react";

const ContributionsGroup = ({ user, tips }) => {
    const filteredTips = tips.filter((tip) => {
        return tip.username?.toLowerCase() == user.toLowerCase() ? tip : "";
    });
    filteredTips.sort();
    const percent = Math.round((filteredTips.length / tips.length) * 100);

    return (
        <div className="grid gap-1">
            <div className="text-contrast font-title">{user}</div>
            <progress className="progress progress-primary w-56 bg-white/20" value={percent} max="100"></progress>
            <div className="text-sm text-contrast">
                {filteredTips.length} tip{filteredTips.length > 1 && "s"} sur {tips.length}, soit {percent}%
            </div>
            <div className="flex gap-3 flex-wrap">
                {filteredTips.map((tip) => (
                    <Link href={`/tips/${tip._id}`} className="hover:text-contrast even:text-primary">
                        <span key={tip._id}>{tip.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContributionsGroup;
