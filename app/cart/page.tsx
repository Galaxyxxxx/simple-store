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


import ProductCardCheckout from "@/components/ProductCardCheckout";
import Store from "@/types/store";
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
const [style, setStyle] = useState(true);
const [notEmpty, setNotEmpty] = useState(false);
function checkIfEmpty(){
  setNotEmpty(true);
}
function changeToPayment(){
  if (notEmpty){
  setStyle(false);
  } else {
    alert("Please fill in all fields")
  }
}

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
            <span className="text-4xl pl-20">To pay:</span>
            {selectedItemsForPresentation?.map((product) => <div className="ml-20 pt-5 text-2xl">{product?.product?.title} - {product?.product?.price}$ x {product.quantity}</div>)}
            <div className="text-5xl pl-20 pt-20">Total: ${selectedItemsForPresentation?.reduce((acc, curr) => acc + (curr?.product?.price || 0) * curr.quantity, 0)}</div>
            <Tabs defaultValue="address" className="w-[400px] pl-20 pt-10">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="address">Address</TabsTrigger>
                <TabsTrigger value="payment" disabled={style}>Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="address">
                <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>
                      Enter your address here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    Name
                    <div className="space-y-1">
                      <Input onKeyDown={checkIfEmpty}/>
                    </div>
                    Last Name
                    <div className="space-y-1">
                      <Input />
                    </div>
                    City
                    <div className="space-y-1">
                      <Input />
                    </div>
                    Street
                    <div className="space-y-1">
                      <Input />
                    </div>
                    Building Number
                    <div className="space-y-1">
                      <Input />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div onClick={changeToPayment}>
                      <Button>Save</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>
                      Enter your payment details here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Input />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          </div>
        <div className="h-1/13">
          <Footer />
        </div>
    </div>
  );
}
