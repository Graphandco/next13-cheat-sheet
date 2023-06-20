import React, { useContext } from "react";
import { SearchTextContext } from "@/context/SearchText";
import { FaTimesCircle } from "react-icons/fa";

const SearchTip = () => {
    const { searchText, setSearchText } = useContext(SearchTextContext);
    return (
        <div className="flex justify-center relative">
            <input className="search-input" value={searchText} type="text" placeholder="Rechercher..." onChange={(e) => setSearchText(e.target.value)} />
            {searchText !== "" && <FaTimesCircle className="absolute right-0 top-1 cursor-pointer hover:text-primary" onClick={() => setSearchText("")} />}
        </div>
    );
};

export default SearchTip;
