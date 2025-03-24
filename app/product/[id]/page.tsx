"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useContext, useEffect, useState } from "react";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import Image from "next/image";
import Store from "@/types/store";
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'


export default function Product() {
  const router = useRouter()
  const {products} = useContext(GlobalProductsContext);
  const [selectedProduct, setSelectedProduct] = useState<Store.Product | undefined>(undefined);
  const {id} = useParams();
  const idAsNumber = Number(id);
  useEffect(() => {
    if (products) {
    if (idAsNumber > products.length) router.push("/");
      setSelectedProduct(products?.find(product => product.id === idAsNumber));
    }}, [products])
  
    
  return (
    <div className="flex-auto h-screen w-screen overflow-hidden">
            <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
                <Navbar />
            </div>
            <div className="w-full h-10/13 justify-center ml-10">
              <div className="flex mt-20 h-full w-full">
                <div className="flex-col h-3/4 w-1/3">
                  <div className="h-full w-full relative">
                  <Image src={selectedProduct?.image || ''} alt="Product image" fill={true}></Image>
                  </div>
                  <div>
                    <div className="text-4xl ml-3 justify-self-center mt-10 mr-10">Price: ${selectedProduct?.price}</div>
                  </div>       
                </div>
                  <div className="flex-col h-full w-2/3">
                    <div className="text-5xl">{selectedProduct?.title}</div>
                    <div className="text-2xl mt-3">Category: {selectedProduct?.category}</div>
                    <div className="text-3xl mt-3">Reviews: {selectedProduct?.rating.rate}/10</div>
                    <div className="text-2xl ">From: {selectedProduct?.rating.count} Reviews</div>
                    <div className="text-xl w-4/5 mt-10">Description: {selectedProduct?.description}</div>
                  </div>
              </div>
            </div>
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
  );
}
