"use client"
import Navbarbtn from "./Navbarbtn"
import Basketbtn from "./Basketbtn"
import Sidebarbtn from "./Sidebarbtn"
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
interface NavbarProps {
  
}


export default function Navbar({}: NavbarProps) {
  function changetab()
	{
		window.location.href = "/RandomItem"
	}

  return  (
      <div className="flex justify-between h-full">
      <div className="size-full w-1/26"> <Navbarbtn isImage={true} text="/logo.jpg" link="/"/></div>
      <div className="mr-25 w-1/29"> <Sidebarbtn /></div>
      <div className="w-3/6 flex place-self-center"> <SearchBar /></div>
      <div className=" w-1/9 flex-grow 1 place-self-center"> <Button onClick={changetab} className="text-3xl h-full relative bg-white color-black w-full" variant="ghost">Random Item</Button></div>
      <div className="w-1/20"> <Basketbtn /></div>
  </div>
  )
}

