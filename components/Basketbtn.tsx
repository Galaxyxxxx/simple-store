"use client"
import { ShoppingCart } from 'lucide-react';
import { Drawer, 
	DrawerContent, 
	DrawerClose, 
	DrawerTrigger, 
	DrawerOverlay, 
	DrawerFooter, 
	DrawerDescription, 
	DrawerTitle, 
	DrawerHeader } from './ui/drawer';
import { Button } from './ui/button';
import {GlobalProductsContext} from "@/contexts/GlobalItemContext";
import { useContext } from'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
import ProductCardCart from './ProductCardCart';
import { CartContentContext} from "@/contexts/CartContentContext";

interface BasketbtnProps {

}

export default function Basketbtn({}: BasketbtnProps){
    const { products } = useContext(GlobalProductsContext);
  const { content, setcontent } = useContext(CartContentContext);
  const displayitems = content?.map((product) => {
    const item = products?.find((p) => p.id === product.id); 
    return item ? { ...item, quantity: product.quantity } : null;
  });

    return (
<div className="w-full h-full">
  <Drawer>
    <DrawerTrigger asChild className="w-full h-full">
      <Button className='w-full h-full bg-white hover:bg-white p-1'><ShoppingCart className="h-full w-full text-black size-full" /></Button>
    </DrawerTrigger>
      <DrawerContent className='h-4/5'>
        <DrawerHeader>
          <DrawerTitle>
            Your Shopping Cart
          </DrawerTitle>
            Summary:
        </DrawerHeader>
          <DrawerDescription className='pl-10 overflow-y-scroll '>
            {displayitems == null || displayitems.length == 0 ? <span>Your shopping cart is empty :/</span> : displayitems?.map((product) => <ProductCardCart key={product?.id} product={product} productamount={product.quantity}/>)}
          </DrawerDescription>
            <DrawerFooter className='h-1/5'>
              <Link href={'/cart'}>
                <Button className='w-full'>Checkout</Button>
              </Link>
                <DrawerClose className='w-full '>
              		<Button className='w-full '>Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
      </DrawerContent>
  </Drawer>
</div>
)};