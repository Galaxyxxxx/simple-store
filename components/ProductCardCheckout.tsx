"use client"
import Store from "@/types/store";
import {Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardCheckoutProps {
  product?: Store.CartProduct;
  productamount: number;
}

export default function ProductCardCheckout({product, productamount}: ProductCardCheckoutProps) {
  if (!product) return null;
  return <Card className="">
    <CardHeader className="flex-row place-content-between">
      <div className="flex">
        <Image src={product.image} alt={product.title} width={80} height={80} />
            <div className="flex-col pl-10">
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>Category: {product.category}</CardDescription>
            </div>
      </div>
      <div className="flex-row">
        Amount:  {productamount}
        <p className="justify-self-end pt-2">Price: ${product.price}</p>
      </div>
    </CardHeader>
  </Card>
}