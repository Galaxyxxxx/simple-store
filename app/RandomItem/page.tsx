"use client";
import Store from "@/types/store";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";


export default function RandomItem() {
    const { products } = useContext(GlobalProductsContext);
    const [randomPickedProduct, setRandomPickedProduct] = useState<Store.Product | undefined>(undefined);

    useEffect(() => {
        if (!randomPickedProduct && products) {
            const randomIndex = Math.floor(Math.random() * (products.length));
            setRandomPickedProduct(products[randomIndex]);
        }
    }, [products])
    
    return (
        <div className="w-1/2 h-11/13 justify-center place-self-center">
            <div className="place-self-center text-4xl">Your random item is:</div>
            {!!randomPickedProduct && 
            <div className="flex-initial">
                <ProductCard product={randomPickedProduct} />
            </div>
            }
        </div>
    );
  }