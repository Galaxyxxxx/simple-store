"use client"

import React, { createContext, useState, useEffect, ReactNode } from "react";
import Store from "@/types/store";

const GlobalProductsContext = createContext<Store.Product[] | undefined>(undefined);

export default GlobalProductsContext;

export const GlobalProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Store.Product[] | undefined>(undefined);
  return (
    <GlobalProductsContext.Provider value={products}>
      {children}
    </GlobalProductsContext.Provider>
  );
};

