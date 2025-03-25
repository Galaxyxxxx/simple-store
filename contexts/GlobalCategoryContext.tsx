"use client"

import React, { createContext, useContext } from "react";
import Store from "@/types/store";
import useProducts from "@/data-hooks/useProducts";
import { useState } from "react";
import Categories from "@/app/CategoriesDatabase";


export type CategoriesContextType = {
  categories?: Store.Categories[];
};

export const GlobalCategoriesContext = createContext<CategoriesContextType>({
  categories: undefined,
});

export const useCategoriesContext = () => {
  const context = useContext(GlobalCategoriesContext);

  if (context === undefined) {
    throw new Error("wrong usage of context");
  }

  return context;
};

export const GlobalCategoriesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <GlobalCategoriesContext.Provider
      value={{
        categories: Categories
      }}
    >
      {children}
    </GlobalCategoriesContext.Provider>
  );
};
