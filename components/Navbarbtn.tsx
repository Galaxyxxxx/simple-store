import { GlobalProductsContext } from "@/contexts/GlobalItemContext"
import { SearchContext } from "@/contexts/SearchContext"
import { UserX2Icon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"

interface NavbarbtnProps {
    isImage: boolean
    text: string
    link: string
}

export default function Navbarbtn({ isImage, text, link }: NavbarbtnProps) {
    const location: string = usePathname();
    const {searchedProducts, setSearchedProducts} = useContext(SearchContext);
    const {products} = useContext(GlobalProductsContext);
    let searchdelete: boolean = false;
    if (location == "/search") searchdelete = true;
    if (location != "/search") searchdelete = false;
        const deleteSearch = (): void =>{ 
            if (products)
            setSearchedProducts(products);
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