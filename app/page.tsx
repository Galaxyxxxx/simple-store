"use client";
import Image from "next/image";
import Store from "@/types/store";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext, useState } from "react";
import Navbar from "@/components/Navbar";
import useProducts from "@/data-hooks/useProducts";
import GlobalProductsContext from "@/contexts/GlobalItemContext";


export default function Home() {
  const products = useContext(GlobalProductsContext);
  //const {products, isPending} = useProducts();

  return (
    <div className="flex-auto h-screen">
      <div className="flex-row justify-center h-1/13 w-full fixed top-0 bg-white outline">
        <Navbar />
      </div>
      <div className="flex-col">
        {products?.map((element, index) => {return (<div className="flex-initial"> <ProductCard key={index} product={element}/> </div>) })}
      </div>
      <div className="h-1/13">
        <Footer />
      </div>
    </div>
  );
}
