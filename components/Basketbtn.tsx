"use client"
import { Key, ShoppingCart } from 'lucide-react';
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
import Store from '@/types/store';

interface BasketbtnProps {

}

export default function Basketbtn({}: BasketbtnProps){
    const { products } = useContext(GlobalProductsContext);
  const { selectedItems, setSelectedItems } = useContext(CartContentContext);
  console.log("SELECTED ITEMS", selectedItems);
  let selectedItemsForPresentation: Store.CardSelectedProduct[] = [];
  if (selectedItems) {
    selectedItemsForPresentation = Array.from(selectedItems.entries()).map(([key, cardItemDetails]) => {
      return {
        product: products?.find((p) => p.id === key),
        quantity: cardItemDetails.quantity
      }
    })
  }


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
            Total price: ${selectedItemsForPresentation?.reduce((acc, curr) => acc + (curr?.product?.price || 0) * curr.quantity, 0)}
        </DrawerHeader>
          <DrawerDescription className='pl-10 overflow-y-scroll '>
            {!selectedItemsForPresentation || selectedItemsForPresentation.length == 0 ? <span>Your shopping cart is empty :/</span> : selectedItemsForPresentation?.map((cardProduct) => <ProductCardCart key={cardProduct?.product?.id} product={cardProduct} productamount={cardProduct.quantity}/>)}
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

/*selectedItems?.map((selectedItem) => {
    const cardProduct: Store.CardSelectedProduct = {
      product: products?.find((p) => p.id === selectedItem()),
      quantity: selectedItem.quantity,
    }
    return cardProduct 
    */