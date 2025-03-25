"use client"

import React, { createContext, useContext } from "react";
import Store from "@/types/store";
import useProducts from "@/data-hooks/useProducts";
import { useState } from "react";


export type FilterContextType = {
  filters?: Store.Filters[]; 
  setFilters: (value: Store.Filters[]) => void;
};

export const FilterContext = createContext<FilterContextType>({
  filters: undefined,
  setFilters: () => {}
});

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("wrong usage of context");
  }

  return context;
};

export const FilterContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
    const [filters, setFilters] = useState<Store.Filters[]|undefined>(
      [ {id: 1, state: false}, 
        {id: 2, state: false}, 
        {id: 3, state: false}, 
        {id: 4, state: false}, 
        {id: 5, state: false}, 
        {id: 6, state: false}, 
        {id: 7, state: false}]
    )

  return (
    <FilterContext.Provider
      value={{
        filters: filters,
        setFilters: setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
