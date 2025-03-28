import { AlignJustify } from "lucide-react" 
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useContext } from "react";
import { FilterContext } from "@/contexts/FilterContext";
import Store from "@/types/store";
import { useRouter } from "next/navigation";
  

interface SidebarbtnProps {

}

export default function Sidebarbtn({}) {
    const router = useRouter();
    const {filters, setFilters} = useContext(FilterContext);  
    const param = useSearchParams()
    const locations = usePathname();
    function addfromLink(id: number) {
        if (filters){
            setFilters(filters.map((filter: Store.Filters) => filter.id === id? {...filter, state:!filter.state}: filter));
            }
    }
    function handleChange(id: number) {
        if (filters) {
            setFilters(filters.map((filter: Store.Filters) => filter.id === id ? { ...filter, state: !filter.state } : filter));
        }

        const currentFilters = param.get('filter') ? param.get('filter')!.split(',') : [];
        const filterIndex = currentFilters.indexOf(id.toString());

        if (filterIndex > -1) {
            // Remove the filter if it exists
            currentFilters.splice(filterIndex, 1);
        } else {
            // Add the filter if it doesn't exist
            currentFilters.push(id.toString());
        }

        const newFilterParam = currentFilters.join(',');
        router.push(`/search?query=${param.get('query') || ''}&filter=${newFilterParam}`);

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
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=4"} onClick={() => addfromLink(4)}>Smartphones</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=6"} onClick={() => addfromLink(6)}>TVs</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=1"} onClick={() => addfromLink(1)}>AGD</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=2"} onClick={() => addfromLink(2)}>Headphones</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=5"} onClick={() => addfromLink(5)}>Smartwatches</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=3"} onClick={() => addfromLink(3)}>Monitors</Link></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl"><Link href={"/search?filter=7"} onClick={() => addfromLink(7)}>VR headsets</Link></div>
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
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Smartphones <Switch onCheckedChange={() => handleChange(4)} id="4" checked={filters?.find(f => f.id === 4)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">TVs <Switch onCheckedChange={() => handleChange(6)} id="6" checked={filters?.find(f => f.id === 6)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">AGD <Switch onCheckedChange={() => handleChange(1)} id="1" checked={filters?.find(f => f.id === 1)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Headphones <Switch onCheckedChange={() => handleChange(2)} id="2" checked={filters?.find(f => f.id === 2)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Smartwatches <Switch onCheckedChange={() => handleChange(5)} id="5" checked={filters?.find(f => f.id === 5)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">Monitors <Switch onCheckedChange={() => handleChange(3)} id="3" checked={filters?.find(f => f.id === 3)?.state || false} /></div>
                                <div className="w-full h-1/4 px-5 py-3 text-xl">VR headsets <Switch onCheckedChange={() => handleChange(7)} id="7" checked={filters?.find(f => f.id === 7)?.state || false} /></div>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
                </div>
            )
    }
}