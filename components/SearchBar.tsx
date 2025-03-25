import { Search } from "lucide-react";
import { FilterContext } from "@/contexts/FilterContext";
import Link from "next/link";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import { useContext, useState } from "react";
import Store from "@/types/store";
import { useSearchParams } from "next/navigation";
import { Input } from "./ui/input"
import { SearchContext } from "@/contexts/SearchContext";

export default function SearchBar() {
    const { products } = useContext(GlobalProductsContext);
    const { searchedProducts, setSearchedProducts } = useContext(SearchContext);
    const [search, setSearch] = useState("");
    const { filters, setFilters } = useContext(FilterContext);
    const param = useSearchParams();

    function searchBar() {
        if (!products) return;
        setSearchedProducts(products);
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
            <Input list="data" onChangeCapture={e => setSearch(e.currentTarget.value)} placeholder="Search" className="w-full flex" />
            <datalist id="data">
                {products?.map((product: Store.Product) => <option key={product.id} value={product.title} />)}
            </datalist>
            <Link href={`/search?query=${search}&filter=${param.get('filter') || ''}`}>
                <Search onClick={searchBar} className="w-fit content-center mt-2 ml-3 flex" />
            </Link>
        </div>
    );
}