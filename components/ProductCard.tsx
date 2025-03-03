import Store from "@/types/store";
import {Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Store.Product;
  howManySelected?: number;
}


export default function ProductCard({product}: ProductCardProps) {

  return <Card>
    <CardHeader className="flex-row place-content-between">
      <div className="flex-col">
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>Category: {product.category}</CardDescription>
      </div>
      <div className="flex-row">
        <Button><Plus /></Button>
        
        <Button><Minus /></Button>
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
        <Button>Add to Cart</Button>
      </div>
    </CardFooter>
  </Card>
}