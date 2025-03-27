"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useEffect } from "react";

interface TabsbtnProps {
    
}




export default function Tabsbtn({}: TabsbtnProps) {
  const [selectedTab, setSelectedTab] = useState<string>("personalInfo");
  const [progress, setprogress] = useState<number>(34);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [buildingNumber, setBuildingNumber] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const form = useForm();
  function goForward() {
    setprogress((prev) => prev + 33);
    if(selectedTab == "personalInfo"){
      setSelectedTab("payment");
    } else {
      setSelectedTab("finalize");
    }
  }
  function goBack() {
    setprogress((prev) => prev - 33);
    if(selectedTab == "payment"){
      setSelectedTab("personalInfo");
    } else {
      setSelectedTab("payment");
    }
  }
  useEffect(() => {
    setPayment(form.getValues("payment"));
  }, [form]);
    return <Tabs defaultValue="personalInfo" className="w-[400px] pl-20 pt-10" value={selectedTab} onValueChange={setSelectedTab}>
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value={selectedTab} className="w-79">
        <Progress value={progress} />
      </TabsTrigger>
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
                    <Input value={name} required onChangeCapture={e => setName(e.currentTarget.value)}/>
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
                    <Input value={lastName} required onChangeCapture={e => setLastName(e.currentTarget.value)}/>
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
                    <Input value={email} type="email" required onChangeCapture={e => setEmail(e.currentTarget.value)}/>
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
                    <Input value={city} required onChangeCapture={e => setCity(e.currentTarget.value)}/>
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
                    <Input value={street} required onChangeCapture={e => setStreet(e.currentTarget.value)}/>
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
                    <Input value={buildingNumber} type="number" required onChangeCapture={e => setBuildingNumber(e.currentTarget.value)}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-5 ml-48" onClick={goForward}>
              <Button type="submit">Next</Button>
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
        <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
          <FormField
            control={form.control}
            name="selectedMethod"
            render={({ field }) => (
              <FormItem>
                <Select value={selectedMethod} onValueChange={setSelectedMethod}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Card">Card</SelectItem>
                      <SelectItem value="Paypal">PayPal</SelectItem>
                      <SelectItem value="Paysafecard">Paysafecard</SelectItem>
                      <SelectItem value="Apple Pay">Apple Pay</SelectItem>
                      <SelectItem value="Blik">Blik</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment</FormLabel>
                <FormControl>
                  <Input value={payment} type="number" required onChangeCapture={e => setPayment(e.currentTarget.value)}/>
                </FormControl>
              </FormItem>
            )}
          />
          </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div onClick={goBack}>
          <Button>Go Back</Button>
          </div>
          <div className="ml-31" onClick={goForward}>
          <Button type="submit">Next</Button>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="finalize">
      <Card>
        <CardHeader>
          <CardTitle>Payment</CardTitle>
          <CardDescription>
            All your info
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
         <div>
           Name: {name} {lastName}
           <br/>
           Email Address: {email}
           <br/>
           City: {city}
           <br/>
           Street: {street} {buildingNumber}
           <br/>
           Payment Method: {selectedMethod}
         </div>
        </CardContent>
        <CardFooter>
          <div onClick={goBack}>
          <Button>Go Back</Button>
          </div>
          <div className="ml-31">
          <Button type="submit">Buy</Button>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
}