import Navbarbtn from "./Navbarbtn"
import Basketbtn from "./Basketbtn"
import Sidebarbtn from "./Sidebarbtn"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface NavbarProps {
    
}


export default function Navbar({}: NavbarProps) {
    return <div className="flex justify-between h-full">
        <div className="size-full w-1/26"> <Navbarbtn isImage={true} text="/logo.jpg" link="/" /> </div>
        <div className="mr-25 w-1/29"><Sidebarbtn /></div>
        <div className="w-3/6 flex place-self-center"> <Input placeholder="Search" className="w-9/10 flex"/> <Search className="w-fit content-center mt-2 ml-3"/></div>
        <div className=" w-1/5 flex-grow 1 place-self-center">  <Navbarbtn isImage={false} text="Random Item" link="" /> </div>
        <div className="w-1/20"> <Basketbtn /></div>
    </div>
}

