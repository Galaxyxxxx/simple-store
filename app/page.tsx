"use client";
import Store from "@/types/store";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import { GlobalCategoriesContext } from "@/contexts/GlobalCategoryContext";
import { FilterContext } from "@/contexts/FilterContext";


export default function Home() {
  const { products } = useContext(GlobalProductsContext);
  const { filters } = useContext(FilterContext);
  console.log(filters);
  return (
    <div className="flex-auto h-screen">
      <div className="flex-row justify-center h-1/13 w-full fixed top-0 bg-white outline">
        <Navbar />
      </div>
      <div className="flex-col pt-20 w-1/2 place-self-center">
        {products && products.map((element: Store.Product, index: number) => (
          <div key={index} className="flex-initial">
            <ProductCard product={element} />
          </div>
        ))}
      </div>
      <div className="h-1/13">
        <Footer />
      </div>
    </div>
  );
}
