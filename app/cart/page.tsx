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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
const [selectedTab, setSelectedTab] = useState<string>("personalInfo");
function changeToPayment(){
  setStyle(false);
}
const form = useForm()

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
            <div className="h-1/4 overflow-y-scroll mb-0 w-2/3">
              <span className="text-4xl pl-20">To pay:</span>
              {selectedItemsForPresentation?.map((product) => <div className="ml-20 pt-5 text-2xl">{product?.product?.title} - {product?.product?.price}$ x {product.quantity}</div>)}
            </div>
            <div className="text-5xl pl-20 pt-20">Total: ${selectedItemsForPresentation?.reduce((acc, curr) => acc + (curr?.product?.price || 0) * curr.quantity, 0)}</div>
            <Tabs defaultValue="personalInfo" className="w-[400px] pl-20 pt-10" value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2">
              </TabsList>
              <TabsContent value="personalInfo">
                <Card className="max-h-100 overflow-y-scroll">
                  <CardHeader>
                    <CardTitle>Personal information</CardTitle>
                    <CardDescription>
                      Enter your personal information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
                      <FormField
                        control={form.control}
                        name="Name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="Last Name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="Email Address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="City"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="Street"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street</FormLabel>
                            <FormControl>
                              <Input required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="Building Number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Building Number</FormLabel>
                            <FormControl>
                              <Input type="number" required/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="mt-5" onClick={changeToPayment}>
                        <Button type="submit">Save</Button>
                      </div>
                    </form>
                  </Form>
                  </CardContent>
                  <CardFooter>
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
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="paysafecard">Paysafecard</SelectItem>
                        <SelectItem value="applePay">Apple pay</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
