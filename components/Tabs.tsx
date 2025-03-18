"use client"
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

interface TabsbtnProps {
    
}


const [selectedTab, setSelectedTab] = useState<string>("personalInfo");
const form = useForm()


export default function Tabsbtn({}: TabsbtnProps) {
    return <Tabs defaultValue="personalInfo" className="w-[400px] pl-20 pt-10" value={selectedTab} onValueChange={setSelectedTab}>
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
            <div className="mt-5">
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
}