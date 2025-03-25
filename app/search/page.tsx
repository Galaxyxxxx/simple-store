"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Store from "@/types/store";
import { useSearchParams } from "next/navigation";
import { GlobalProductsContext } from "@/contexts/GlobalItemContext";
import { GlobalCategoriesContext } from "@/contexts/GlobalCategoryContext";

export default function Search() {
    const { products } = useContext(GlobalProductsContext);
    const { searchedProducts, setSearchedProducts } = useContext(SearchContext);
    const { categories } = useContext(GlobalCategoriesContext);
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState<boolean>(false);

    useEffect(() => {
        if (searchParams.get('filter') != null && searchParams.get('filter')) {
            const appliedFilters = searchParams.get('filter')?.split('');
            console.log("filtry", appliedFilters);
            const appliedCategories: string[] = [];
            appliedFilters?.forEach((id: string) => {
                const category = categories?.find((category: Store.Categories) => category.id == Number(id));
                if (category) appliedCategories.push(category.name);
            });
            console.log("kategorie", appliedCategories);
            if (products && appliedFilters && appliedFilters?.length > 0 && searchedProducts) {
                const newProducts = products?.filter((product: Store.Product) => 
                    appliedCategories.some((category: string) => product.category.includes(category))
                );
                if (newProducts) {
                    setSearchedProducts(newProducts);
                }
            }
        }
    }, [searchParams, categories, products, setSearchedProducts]);

    return (
        <div className="flex-auto h-screen">
            <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
                <Navbar />
            </div>
            {filter == false && searchedProducts && searchedProducts.length <= 2 &&
                <div className="w-1/2 h-11/13 justify-center place-self-center">
                    {searchedProducts?.map((element: Store.Product) => <ProductCard key={element.id} product={element} />)}
                </div>
            }
            {filter == false && searchedProducts && searchedProducts.length > 2 &&
                <div className="w-1/2 justify-center place-self-center">
                    {searchedProducts?.map((element: Store.Product) => <ProductCard key={element.id} product={element} />)}
                </div>
            }
            {filter == true && searchedProducts && searchedProducts.length <= 2 &&
                <div className="w-1/2 h-11/13 justify-center place-self-center">
                    {searchedProducts?.map((element: Store.Product) => <ProductCard key={element.id} product={element} />)}
                </div>
            }
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
    );
}