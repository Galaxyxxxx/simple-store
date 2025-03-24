"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Store from "@/types/store";

export default function Search() {
    const { searchedProducts, setSearchedProducts } = useContext(SearchContext);
    
    return (
        <div className="flex-auto h-screen">
            <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
                <Navbar />
            </div>
            <div className="w-1/2 justify-center place-self-center">
                { searchedProducts?.map((element: Store.Product) => <ProductCard product={element}></ProductCard>)}
            </div>
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
    );
  }