import { createContext, useState } from "react";
import Store from "@/types/store";


const CartContentContext = createContext<Store.CartItem[]>([]);

export default CartContentContext;

export const CartContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Store.CartItem[]>([]);

    return (
        <CartContentContext.Provider value={cartItems}>
            {children}
        </CartContentContext.Provider>
    );
};