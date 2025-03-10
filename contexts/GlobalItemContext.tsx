import Store from "@/types/store";
import { createContext, useContext, useState } from "react";

const GlobalProductsContext = createContext<Store.Product[] | undefined>(undefined)

export default GlobalProductsContext