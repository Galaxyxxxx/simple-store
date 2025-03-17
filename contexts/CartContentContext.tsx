"use client"
import { createContext, useContext } from "react";
import Store from "@/types/store";
import useCardLocalStorage from "@/utils/CardLocalStorage";

export type CartContentContextType = {
    selectedItems?: Store.CartItem; 
    setSelectedItems: (value: Store.CartItem) => void;
  };
  
  export const CartContentContext = createContext<CartContentContextType>({
    selectedItems: undefined,
    setSelectedItems: () => {}
  });
  
  export const useCartContentContext = () => {
    const context = useContext(CartContentContext);
  
    if (context === undefined) {
      throw new Error("wrong usage of context");
    }
  
    return context;
  };
  
  export const CartContentContextProvider: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => {

    const {selectedProductsFromLocalStorage, writeSelectedProductsToLocalStorage} = useCardLocalStorage()
  
    return (
      <CartContentContext.Provider
        value={{
          selectedItems: selectedProductsFromLocalStorage,
          setSelectedItems: writeSelectedProductsToLocalStorage
        }}
      >
        {children}
      </CartContentContext.Provider>
    );
  };
  