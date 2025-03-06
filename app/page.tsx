"use client";
import Image from "next/image";
import Store from "@/types/store";
import products from "@/app/ProductDatabase";
import ProductCard from "@/components/ProductCard";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex-auto h-screen">
      <div className="flex-row justify-center h-1/16 sticky top-0 bg-white outline">
        <Navbar />
      </div>
      <div className="flex-col">
        {products.map((element, index) => {return (<div className="flex-initial"> <ProductCard key={index} product={element}/> </div>) })}
      </div>
    </div>
  );
}
