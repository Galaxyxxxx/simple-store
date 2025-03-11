"use client"
import Store from "@/types/store";
import {Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState, useContext } from "react";
import { CartContentContext} from "@/contexts/CartContentContext";

interface ProductCardProps {
  product: Store.Product;
}

export default function ProductCard({product}: ProductCardProps) {
  const [productamount, setProductAmount] = useState<number>(1);
  const { content, setcontent } = useContext(CartContentContext);
  const PAmount = (): void => {
    setProductAmount(productamount + 1);
  }
  const MAmount = (): void => {
    if (productamount > 1)
    setProductAmount(productamount - 1);
  }
  const handleClick = () => {
    if (content === undefined) {
      console.log("1");
    } else {
      const existingProduct = content.find(p => p.id === product.id);
      if (productamount > 0) {
        if (existingProduct) {
          const updatedContent = content.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity + productamount } : p
          );
          setcontent(updatedContent);
        } else {
          setcontent([...content, { id: product.id, quantity: productamount }]);
          console.log(content);
        }
      } else {
        console.log("0");
        console.log(content);
      }
    }
  };
  return <Card>
    <CardHeader className="flex-row place-content-between">
      <div className="flex-col">
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>Category: {product.category}</CardDescription>
      </div>
      <div className="flex-row">
        <Button onClick={PAmount} className="bg-white hover:bg-white"><Plus className="text-black"/></Button>
        {productamount}
        <Button onClick={MAmount} className="bg-white hover:bg-white"><Minus className="text-black"/></Button>
      </div>
    </CardHeader>
    <CardContent className="flex stretch-items">
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <CardDescription>{product.description}</CardDescription>
    </CardContent>
    <CardFooter className="flex place-content-between">
      <div className="flex-col"> 
        <p>Rating: {product.rating.rate}</p> 
        <p>({product.rating.count} review/s)</p>  
      </div>
      <div className="grid justify-items-end">
        <p>Price: ${product.price}</p>
        <Button onClick={handleClick}>Add to Cart</Button>
      </div>
    </CardFooter>
  </Card>
}