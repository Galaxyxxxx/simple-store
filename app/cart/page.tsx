"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { CartContentContext} from "@/contexts/CartContentContext";
import { GlobalProductsContext} from "@/contexts/GlobalItemContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCardCheckout from "@/components/ProductCardCheckout";
import Store from "@/types/store";
import Tabsbtn from "@/components/Tabs";
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
            <div className="pl-20 pt-3 overflow-y-scroll h-10/11">{selectedItemsForPresentation == null || selectedItemsForPresentation.length == 0 ? 
            <span className="text-3xl ml-20 pt-20">Your shopping cart is empty :/</span> : selectedItemsForPresentation?.map((product) => <div><ProductCardCheckout product={product?.product} productamount={product?.quantity} /> </div>)}</div>
          </div>
          <div className="w-1/2">
            <div className="h-1/4 overflow-y-scroll mb-0 w-2/3">
              <span className="text-4xl pl-20">To pay:</span>
              {selectedItemsForPresentation?.map((product) => <div className="ml-20 pt-5 text-2xl">{product?.product?.title} - ${product?.product?.price} x {product.quantity}</div>)}
            </div>
            <div className="text-5xl pl-20 pt-20">Total: ${selectedItemsForPresentation?.reduce((acc, curr) => acc + (curr?.product?.price || 0) * curr.quantity, 0)}</div>
            <Tabsbtn />
          </div>
          </div>
        <div className="h-1/13">
          <Footer />
        </div>
    </div>
  );
}
