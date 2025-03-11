"use client"

import React, { createContext, useContext } from "react";
import Store from "@/types/store";
import useProducts from "@/data-hooks/useProducts";


export type GlobalProductsContextType = {
  products?: Store.Product[]; 
};

export const GlobalProductsContext = createContext<GlobalProductsContextType>({
  products: undefined
});

export const useGlobalProductsContext = () => {
  const context = useContext(GlobalProductsContext);

  if (context === undefined) {
    throw new Error("wrong usage of context");
  }

  return context;
};

export const GlobalProductsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const {products} = useProducts();

  return (
    <GlobalProductsContext.Provider
      value={{
        products
      }}
    >
      {children}
    </GlobalProductsContext.Provider>
  );
};
