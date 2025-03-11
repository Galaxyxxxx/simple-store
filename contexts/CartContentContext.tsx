"use client"
import { createContext, useState, ReactNode, useContext } from "react";
import Store from "@/types/store";

export type CartContentContextType = {
    content?: Store.CartItem[]; 
    setcontent: (value: Store.CartItem[]) => void;
  };
  
  export const CartContentContext = createContext<CartContentContextType>({
    content: undefined,
    setcontent: () => {}
  });
  
  export const useGlobalProductsContext = () => {
    const context = useContext(CartContentContext);
  
    if (context === undefined) {
      throw new Error("wrong usage of context");
    }
  
    return context;
  };
  
  export const CartContentContextProvider: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => {
  
    const [content, setcontent] = useState<Store.CartItem[]>([]);
  
    return (
      <CartContentContext.Provider
        value={{
          content,
          setcontent
        }}
      >
        {children}
      </CartContentContext.Provider>
    );
  };
  