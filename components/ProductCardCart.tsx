"use client"
import Store from "@/types/store";
import {Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";

interface ProductCardCartProps {
  product: Store.CartProduct;
  productamount: number;
  setProductAmount: (value: number) => void;
}

export default function ProductCardCart({product, productamount, setProductAmount}: ProductCardCartProps) {
  const PAmount = (): void => {
    setProductAmount(productamount + 1);
  }
  const MAmount = (): void => {
    if (productamount > 0)
    setProductAmount(productamount - 1);
  }
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
        <Trash2 className="justify-self-end mr-2" />
        <Button onClick={PAmount} className="bg-white hover:bg-white"><Plus className="text-black"/></Button>
        {productamount}
        <Button onClick={MAmount} className="bg-white hover:bg-white"><Minus className="text-black"/></Button>
        <p className="justify-self-end pt-2 pr-2">Price: ${product.price}</p>
      </div>
    </CardHeader>
  </Card>
}