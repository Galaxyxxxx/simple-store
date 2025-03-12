"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { CartContentContext} from "@/contexts/CartContentContext";
import { GlobalProductsContext} from "@/contexts/GlobalItemContext";
import ProductCardCheckout from "@/components/ProductCardCheckout";
import Store from "@/types/store";

export default function Cart() {
  const { products } = useContext(GlobalProductsContext);
  const { selectedItems, setSelectedItems } = useContext(CartContentContext);
  let selectedItemsForPresentation: Store.CardSelectedProduct[] = [];
    if (selectedItems) {
      selectedItemsForPresentation = Array.from(selectedItems.entries()).map(([key, cardItemDetails]) => {
        return {
          product: products?.find((p) => p.id === key),
          quantity: cardItemDetails.quantity
        }
})};

  return (
    <div className="flex-auto h-screen overflow-hidden">
        <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
          <Navbar />
        </div>
          <div className="h-11/13 w-full flex">
          <div className="w-1/2">
            <span className="text-4xl pl-13">Cart:</span>
            <div className="pl-20 pt-3 overflow-y-scroll h-10/11">{selectedItemsForPresentation == null || selectedItemsForPresentation.length == 0 ? <span className="text-3xl ml-20 pt-20">Your shopping cart is empty :/</span> : selectedItemsForPresentation?.map((product) => <div><ProductCardCheckout product={product.product} productamount={product?.quantity} /> </div>)}</div>
          </div>
          <div className="w-1/2">
            <span className="text-4xl pl-20">To pay:</span>
            {selectedItemsForPresentation?.map((product) => <div className="ml-20 pt-5 text-2xl">{product.product.title} - {product.product.price}$ x {product.quantity}</div>)}
            <div className="text-5xl pl-20 pt-20">Total: ${selectedItemsForPresentation?.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)}</div>
          </div>
          </div>
        <div className="h-1/13">
          <Footer />
        </div>
    </div>
  );
}
