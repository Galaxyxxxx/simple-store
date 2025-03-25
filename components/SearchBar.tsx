import { Input } from "./ui/input"
import { useContext, useState } from "react";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import { SearchContext } from "@/contexts/SearchContext";
import Link from "next/link";
import Store from "@/types/store";
import { Search } from "lucide-react";

export default function SearchBar(){
    const { products } = useContext(GlobalProductsContext);
    const { searchedProducts, setSearchedProducts} = useContext(SearchContext)
    const [search, setSearch] = useState("");
    function searchBar(){
            const filteredProducts = products?.filter((product: Store.Product) => product.title.toLowerCase().includes(search.toLowerCase()));
            if (filteredProducts) {
            setSearchedProducts(filteredProducts);
            }
            if (filteredProducts?.length == 1) {
                const filteredProduct = filteredProducts[0];
                window.location.href = `/product/${filteredProduct.id}`;
            }
      }

    return (
        <div className="h-full w-full relative flex">
                    <Input list="data" onChangeCapture={e => setSearch(e.currentTarget.value)} placeholder="Search" className="w-full flex"/>
                    <datalist id="data">
                        {products?.map((product: Store.Product) => <option key={product.id} value={product.title} />)}
                    </datalist> 
            <Link href={"/search"}>
                <Search onClick={searchBar} className="w-fit content-center mt-2 ml-3 flex"/> 
            </Link>
        </div>
    )
}