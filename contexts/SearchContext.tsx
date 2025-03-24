"use client"

import React, { createContext, useContext } from "react";
import Store from "@/types/store";
import useProducts from "@/data-hooks/useProducts";
import { useState } from "react";


export type SearchContextType = {
  searchedProducts?: Store.Product[]; 
  setSearchedProducts: (value: Store.Product[]) => void;
};

export const SearchContext = createContext<SearchContextType>({
  searchedProducts: undefined,
  setSearchedProducts: () => {}
});

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("wrong usage of context");
  }

  return context;
};

export const SearchContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
    const [searchedProducts, setSearchedProducts] = useState<Store.Product[]|undefined>(undefined)

  return (
    <SearchContext.Provider
      value={{
        searchedProducts: searchedProducts,
        setSearchedProducts: setSearchedProducts
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
