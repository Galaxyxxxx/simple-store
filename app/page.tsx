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
  return (
    <>
      {products && products.map((element: Store.Product, index: number) => (
        <div key={index} className="flex-initial">
          <ProductCard product={element} />
        </div>
      ))}
    </>

  );
}
