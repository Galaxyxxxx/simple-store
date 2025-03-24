"use client"
import Navbarbtn from "./Navbarbtn"
import Basketbtn from "./Basketbtn"
import Sidebarbtn from "./Sidebarbtn"
import Store from "@/types/store";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useContext } from "react"
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import Link from "next/link";
import { SearchContext } from "@/contexts/SearchContext";

interface NavbarProps {
  
}


export default function Navbar({}: NavbarProps) {
  const [search, setSearch] = useState("");
  const { products } = useContext(GlobalProductsContext);
	const { searchedProducts, setSearchedProducts} = useContext(SearchContext)

  function searchBar(){
		const filteredProducts = products?.filter((product: Store.Product) => product.title.toLowerCase().includes(search.toLowerCase()));
		console.log(filteredProducts);
		if (filteredProducts)
		setSearchedProducts(filteredProducts);
  }

  return  (
      <div className="flex justify-between h-full">
      <div className="size-full w-1/26"> <Navbarbtn isImage={true} text="/logo.jpg" link="/"/></div>
      <div className="mr-25 w-1/29"> <Sidebarbtn /></div>
      <div className="w-3/6 flex place-self-center"> <Input onChangeCapture={e => setSearch(e.currentTarget.value)} placeholder="Search" className="w-9/10 flex"/> <Link href="/search"> <Search onClick={searchBar} className="w-fit content-center mt-2 ml-3"/> </Link></div>
      <div className=" w-1/9 flex-grow 1 place-self-center"> <Navbarbtn isImage={false} text="Random Item" link="/RandomItem"/></div>
      <div className="w-1/20"> <Basketbtn /></div>
  </div>
  )
}

