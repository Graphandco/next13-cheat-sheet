"use client";

import { createContext, useState } from "react";

export const SearchTextContext = createContext();

export const SearchTextProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");

    return <SearchTextContext.Provider value={{ searchText, setSearchText }}>{children}</SearchTextContext.Provider>;
};
