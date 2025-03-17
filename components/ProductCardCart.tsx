"use client"
import Store from "@/types/store";
import { useContext } from "react";
import { CartContentContext, useCartContentContext} from "@/contexts/CartContentContext";
import {Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";

interface ProductCardCartProps {
  product: Store.CardSelectedProduct;
  productamount: number;
}

export default function ProductCardCart({product, productamount}: ProductCardCartProps) {
  const {selectedItems , setSelectedItems } = useCartContentContext();
  const icrementQuantity = (): void => {
    if (product.product) {
      const previousQuantity = selectedItems?.get(product.product.id)?.quantity || 0;
      const newQuantity = previousQuantity + 1;
      const copyOfSelectedItems = structuredClone(selectedItems) || new Map();
      copyOfSelectedItems?.set(product.product.id, {quantity: newQuantity});
      setSelectedItems(copyOfSelectedItems);
    }
  }
  const decrementQuantity = (): void => {
    if (product.product) {
      const previousQuantity = selectedItems?.get(product.product.id)?.quantity || 0;
      const newQuantity = previousQuantity - 1;
      const copyOfSelectedItems = structuredClone(selectedItems) || new Map();
      if (newQuantity === 0) {
        copyOfSelectedItems.delete(product.product.id);
      } else {
        copyOfSelectedItems?.set(product.product.id, {quantity: newQuantity});
      }
      setSelectedItems(copyOfSelectedItems);
    }
  }
  const handleDelete = (): void => {
    if (product.product) {
      const copyOfSelectedItems = structuredClone(selectedItems) || new Map();
        copyOfSelectedItems.delete(product.product.id);
        setSelectedItems(copyOfSelectedItems);
      }
    console.log("Deleted");
  }
  return <Card className="">
    <CardHeader className="flex-row place-content-between">

      <div className="flex">
        <Image src={product.product?.image || ""} alt={product?.product?.title || "" } width={80} height={80} />
            <div className="flex-col pl-10">
                <CardTitle>{product?.product?.title || ""}</CardTitle>
                <CardDescription>Category: {product?.product?.category}</CardDescription>
            </div>
      </div>
      <div className="flex-row">
        <Trash2 onClick={handleDelete} className="justify-self-end mr-2" />
        <Button onClick={icrementQuantity} className="bg-white hover:bg-white"><Plus className="text-black"/></Button>
        {productamount}
        <Button onClick={decrementQuantity} className="bg-white hover:bg-white"><Minus className="text-black"/></Button>
        <p className="justify-self-end pt-2 pr-2 flex-col">Price: ${product?.product?.price} Total Price: ${(product?.product?.price || 0) * product.quantity}</p>
      </div>
    </CardHeader>
  </Card>
}