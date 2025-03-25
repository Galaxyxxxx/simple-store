import { AlignJustify } from "lucide-react" 
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { useState } from "react";
  

interface SidebarbtnProps {

}

export default function Sidebarbtn({}) {
    const [checked, setChecked] = useState<boolean>(false);
    const locations = usePathname();
    const test = () => {
        setChecked(!checked);
        console.log(checked);
    }
    switch (locations){
        case '/':
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
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?a=true"}>Smartphones</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>TV's</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>AGD</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>Headphones</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>Smartwatches</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>Monitors</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search"}>VR headsets</Link></div>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
                </div>
            )
        case '/search':
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
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Smartphones <Switch /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">TV's <Switch onCheckedChange={test} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">AGD <Switch /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Headphones <Switch /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Smartwatches <Switch /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Monitors <Switch /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">VR headsets <Switch /></div>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
                </div>
            )
    }
}