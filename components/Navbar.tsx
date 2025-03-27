"use client"
import Navbarbtn from "./Navbarbtn"
import Basketbtn from "./Basketbtn"
import Sidebarbtn from "./Sidebarbtn"
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useContext, useEffect, useState } from "react";
import { CartContentContext } from "@/contexts/CartContentContext";

interface NavbarProps {
  
}


export default function Navbar({}: NavbarProps) {
  const { selectedItems } = useContext(CartContentContext)
  const [amountOfAllItemsInCart, setAmount] = useState<number>(0)
  useEffect(() => {
    if (selectedItems) {
      const totalQuantity = Array.from(selectedItems.values()).reduce((sum, item) => sum + item.quantity, 0)
      setAmount(totalQuantity)
    }  else {
      setAmount(0)
    }
  } ), [selectedItems]
  function changetab()
	{
		window.location.href = "/RandomItem"
	}

  return  (
      <div className="flex justify-between h-full">
      <div className="size-full w-1/26"> <Navbarbtn isImage={true} text="/logo.jpg" link="/"/></div>
      <div className="mr-25 w-1/29"> <Sidebarbtn /></div>
      <div className="w-3/6 flex place-self-center"> <SearchBar /></div>
      <div className=" w-1/9 flex-grow 1"> <Button onClick={changetab} className="text-3xl h-full relative bg-white color-black w-full" variant="ghost">Random Item</Button></div>
      <div className="flex-col">
          <Badge className="w-full h-1/2 bg-white text-black">{selectedItems?.size}</Badge>
          <Badge className="w-full h-1/2 bg-white text-black">{amountOfAllItemsInCart}</Badge>
      </div>
      <div className="w-1/20"> <Basketbtn /></div>
  </div>
  )
}

