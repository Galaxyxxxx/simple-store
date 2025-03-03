import Image from "next/image";
import Store from "@/types/store";
import products from "@/app/ProductDatabase";
import ProductCard from "@/components/ProductCard";
import React, { useState } from "react";

export default function Home() {
  const [productsnumber, setProductsNumber] = useState<number>(0);
  return (
    <div className="flex-col">
      {products.map((element) => {return (<div className="flex-initial"> <ProductCard key = {element.id} product= {element} /> </div>) })}
    </div>
  );
}
