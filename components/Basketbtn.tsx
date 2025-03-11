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
	DrawerHeader, 
	DrawerPortal } from './ui/drawer';
import { Button } from './ui/button';
import GlobalProductsContext from "@/contexts/GlobalItemContext";
import { useContext } from'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface BasketbtnProps {

}

export default function Basketbtn({}: BasketbtnProps){
	const shoppingtest = [{ id:1, quantity: 2}, { id:2, quantity: 1}];
	const products = useContext(GlobalProductsContext);
	const displayitems = products?.filter((product) => shoppingtest.some((item) => item.id === product.id));
	

    return (
        <div className="w-full h-full">
					<Drawer>
            <DrawerTrigger asChild>
            	<Button className='w-full h-full bg-white hover:bg-white'><ShoppingCart className="w-full h-full text-black" /></Button>
            </DrawerTrigger>
						<DrawerContent className='h-4/5'>
							<DrawerHeader>
                <DrawerTitle>Your Shopping Cart</DrawerTitle>
								Summary:
              </DrawerHeader>
              	<DrawerDescription className='pl-10 overflow-scroll'>
										{shoppingtest.length == 0 ? "Your shopping cart is empty :(" : displayitems?.map((element, index) => {return (<div className="flex-initial"> <ProductCard key={index} product={element}/> </div>) })}
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
    )
}