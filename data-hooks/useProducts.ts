
import MockDataService from "@/services/MockDataService";
import { useQuery } from "@tanstack/react-query";

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