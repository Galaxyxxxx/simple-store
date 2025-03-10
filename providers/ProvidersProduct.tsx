import useProducts from "@/data-hooks/useProducts"
import Store from "@/types/store"
import { children, useState } from "react"
import GlobalProductsContext from "@/contexts/GlobalItemContext"


export default function GPProvider = ({}) => {
    const [gproducts, getproducts] = useState<Store.Product[]>(); 
    const { getproducts } = useState<useProducts>;
    return (
        <GlobalProductsContext.Provider value={gproducts}>{children}</GlobalProductsContext.Provider>
    )
}