"use client"
import Store from "@/types/store";
import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { CartContentContext} from "@/contexts/CartContentContext";
import { toast }  from "sonner";
interface ProductCardProps {
  product: Store.Product;
}

export default function ProductCard({product}: ProductCardProps) {
  const [productamount, setProductAmount] = useState<number>(1);
  const { selectedItems, setSelectedItems } = useContext(CartContentContext);
  const PAmount = (): void => {
    setProductAmount(productamount + 1);
  }
  const MAmount = (): void => {
    if (productamount > 1)
    setProductAmount(productamount - 1);
  }
  const handleClick = () => {
    if (selectedItems?.has(product.id)) {
      const foundQuantity = selectedItems.get(product.id)?.quantity;
        if(foundQuantity && foundQuantity !== undefined) {
      const copyOfSelectedtems = structuredClone(selectedItems);
      copyOfSelectedtems?.set(product.id, { quantity: foundQuantity + productamount });
      setSelectedItems(copyOfSelectedtems);
      }
    } else if (!selectedItems?.has(product.id)) {
      const copyOfSelectedtems = structuredClone(selectedItems) || new Map();
      copyOfSelectedtems?.set(product.id, { quantity: productamount });
      setSelectedItems(copyOfSelectedtems);
    } else {
      toast("Error", 
        { description: <div className="text-black"> {product.title} is already in your cart! </div>,
          unstyled: true,
          classNames: {
            toast: 'bg-gray-500 rounded-md p-3 text-black',
            description: 'text-black',
          }
        });
    }
    sonner(product, productamount);
  };
  const sonner = (product: Store.Product, productamount: Number) => {
    toast(productamount + " Product/s added to cart!", 
      { description: <div className="text-black"> {product.title} was added to the cart! </div>,
        unstyled: true,
        classNames: {
          toast: 'bg-gray-500 rounded-md p-3 text-black',
          description: 'text-black',
        }
      });
  }
  return <Card>
    <CardHeader className="flex-row place-content-between">
      <div className="flex-col">
        <CardTitle>
          <Link href={`/product/${product.id}`} className="underline hover:text-primary-600">
            {product.title}
          </Link>
        </CardTitle>
        <CardDescription>Category: {product.category}</CardDescription>
      </div>
      <div className="flex-row">
        <Button onClick={PAmount} className="bg-white hover:bg-white"><Plus className="text-black"/></Button>
        {productamount}
        <Button onClick={MAmount} className="bg-white hover:bg-white"><Minus className="text-black"/></Button>
      </div>
    </CardHeader>
    <CardContent className="flex stretch-items w-9/10">
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

