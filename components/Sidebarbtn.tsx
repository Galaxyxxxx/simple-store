import { AlignJustify } from "lucide-react" 
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

interface SidebarbtnProps {

}

export default function Sidebarbtn({}) {
    return (
        <div className="w-full h-full">
        <Sheet>
            <SheetTrigger className="w-full h-full">
                <AlignJustify className="w-3/5 h-full justify-items-start"/>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Categories</SheetTitle>
                    <SheetDescription>Select a category to view products</SheetDescription>
                </SheetHeader>
                <SheetDescription>
                    <div className="flex flex-col w-full h-full">
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Electronics</div>
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Clothing</div>
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Food</div>
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Weapons</div>
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Toys</div>
                        <div className="w-full h-1/4 px-5 py-3 text-xl">Books</div>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
        </div>
    )
}