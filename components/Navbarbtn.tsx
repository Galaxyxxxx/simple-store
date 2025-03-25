import { GlobalProductsContext } from "@/contexts/GlobalItemContext"
import { SearchContext } from "@/contexts/SearchContext"
import { UserX2Icon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { FilterContext } from "@/contexts/FilterContext";

interface NavbarbtnProps {
    isImage: boolean
    text: string
    link: string
}

export default function Navbarbtn({ isImage, text, link }: NavbarbtnProps) {
    const location: string = usePathname();
    const {searchedProducts, setSearchedProducts} = useContext(SearchContext);
    const {filters, setFilters} = useContext(FilterContext);
    const {products} = useContext(GlobalProductsContext);
    let searchdelete: boolean = false;
    if (location == "/search") searchdelete = true;
    if (location != "/search") searchdelete = false;

        const deleteSearch = (): void =>{ 
            if (products){
            setSearchedProducts(products);
            setFilters([ {id: 1, state: false}, 
                {id: 2, state: false}, 
                {id: 3, state: false}, 
                {id: 4, state: false}, 
                {id: 5, state: false}, 
                {id: 6, state: false}, 
                {id: 7, state: false}]);
            }
            else
            setSearchedProducts([]);
        }
    return (
        <div className="text-3xl h-full relative">
            { searchdelete == false &&
            <Link href={link}>{isImage ? <Image src={text} alt="Logo" layout="fill" className="relative min-w-full aspect-1/1"/>: <div  className="justify-self-center"> {text} </div>}</Link>
            }
            { searchdelete == true &&
            <Link href={link}>{isImage ? <Image src={text} alt="Logo" layout="fill" className="relative min-w-full aspect-1/1" onClick={deleteSearch}/>: <div  className="justify-self-center"> {text} </div>}</Link>
            }
        </div>
    )
}