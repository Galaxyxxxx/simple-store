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

    const checkForSearchedProduct = () => {
        if (products) {
            let filteredProducts = [...products];

            // Apply search filter
            const searchQuery = searchParams.get('query');
            if (searchQuery) {
                filteredProducts = filteredProducts.filter((product: Store.Product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            // Apply category filters
            const appliedFilters = searchParams.get('filter')?.split('') || [];
            if (appliedFilters.length > 0) {
                const appliedCategories: string[] = [];
                appliedFilters.forEach((id: string) => {
                    const category = categories?.find((category: Store.Categories) => category.id == Number(id));
                    if (category) appliedCategories.push(category.name);
                });

                filteredProducts = filteredProducts.filter((product: Store.Product) =>
                    appliedCategories.some((category: string) => product.category.includes(category))
                );
            }

            setSearchedProducts(filteredProducts);
        }
    }

    useEffect(() => {
        checkForSearchedProduct();
    }, [searchParams, categories, products, setSearchedProducts]);

    return (
        <>
            {searchedProducts && (
                <div className={`w-1/2 ${searchedProducts.length <= 2 ? 'h-11/13' : ''} justify-center place-self-center`}>
                    {searchedProducts.map((element: Store.Product) => (
                        <ProductCard key={element.id} product={element} />
                    ))}
                </div>
            )}
        </>
    );
}