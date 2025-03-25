"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Store from "@/types/store";
import { useSearchParams } from "next/navigation";

export default function Search() {
    const { searchedProducts, setSearchedProducts } = useContext(SearchContext);
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState<boolean>(false)
    
    console.log(searchParams);
    
    
    return (
        <div className="flex-auto h-screen">
            <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
                <Navbar />
            </div>
                {filter == false && searchedProducts && searchedProducts.length <= 2 &&
                <div className="w-1/2 h-11/13 justify-center place-self-center">
                    { searchedProducts?.map((element: Store.Product) => <ProductCard product={element}></ProductCard>)}
                </div>
                } 
                {filter == false && searchedProducts && searchedProducts.length > 2 &&
                    <div className="w-1/2 justify-center place-self-center">
                    { searchedProducts?.map((element: Store.Product) => <ProductCard product={element}></ProductCard>)}
                    </div>
                }
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
    );
  }