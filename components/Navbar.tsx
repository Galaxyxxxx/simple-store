import Navbarbtn from "./Navbarbtn"
import Basketbtn from "./Basketbtn"
import Sidebarbtn from "./Sidebarbtn"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Navbardivrodivs {
    
}


export default function Navbar({}: Navbardivrodivs) {
    return <div className="flex justify-between h-full">
        <div className="w-1/7"> <Navbarbtn isImage={true} text="/logo.jpg" link="#" /> </div>
        <div className="mr-25 w-1/5"><Sidebarbtn /></div>
        <div className="w-3/5"> <Input placeholder="Search"/> <Search /></div>
        <div className="ml-45 w-1/5">  <Navbarbtn isImage={false} text="Nic" link="#" /> </div>
        <div className="w-1/6"> <Basketbtn /></div>
    </div>
}

