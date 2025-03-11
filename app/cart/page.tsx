"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { CartContentContext} from "@/contexts/CartContentContext";
import { GlobalProductsContext} from "@/contexts/GlobalItemContext";
import ProductCardCheckout from "@/components/ProductCardCheckout";

export default function Cart() {
  const { products } = useContext(GlobalProductsContext);
  const { content, setcontent } = useContext(CartContentContext);
  const displayitems = content?.map((product) => {
    const item = products?.find((p) => p.id === product.id); 
    return item ? { ...item, quantity: product.quantity } : null;
  });

  return (
    <div className="flex-auto h-screen overflow-hidden">
        <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
          <Navbar />
        </div>
          <div className="h-11/13 w-full flex">
          <div className="w-1/2">
            <span className="text-4xl pl-13">Cart:</span>
            <div className="pl-20 pt-3 overflow-y-scroll h-10/11">{displayitems == null || displayitems.length == 0 ? <span className="text-3xl ml-20 pt-20">Your shopping cart is empty :/</span> : displayitems?.map((product) => <div><ProductCardCheckout product={product} productamount={product?.quantity} /> </div>)}</div>
          </div>
          <div className="w-1/2">
            <span className="text-4xl pl-20">To pay:</span>
            {displayitems?.map((product) => <div className="ml-20 pt-5 text-2xl">{product.title} - {product.price}$ x {product.quantity}</div>)}
            <div className="text-5xl pl-20 pt-20">Total: ${displayitems?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</div>
          </div>
          </div>
        <div className="h-1/13">
          <Footer />
        </div>
    </div>
  );
}
