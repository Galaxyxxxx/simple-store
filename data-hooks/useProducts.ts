
import products from "@/app/ProductDatabase";
import MockDataService from "@/services/MockDataService";
import Store from "@/types/store"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useProducts = () => {
  const {isPending, data} = useQuery({
    queryKey: ["products"],
    queryFn: MockDataService.getProducts
  })

  return {
    isPending,
    products: data
  }
}

export default useProducts;