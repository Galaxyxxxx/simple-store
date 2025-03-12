import Store from "@/types/store";
import { useEffect, useState } from "react";

export interface CardLocalStorageData {
  
}


const SELECTED_PRODUCTS_KEY = "selectedProducts";

const useCardLocalStorage = () => {

  const [selectedProductsFromLocalStorage, setSelectedProductsFromLocalStorage] = useState<Store.CartItem | undefined>(undefined);

  const readSelectedProductsFromLocalStorage = async () => {
    try {
      const readValue = await window.localStorage.getItem(SELECTED_PRODUCTS_KEY);
      if (readValue) {
        const parsedReadValue = new Map(JSON.parse(readValue)) as Store.CartItem;
        setSelectedProductsFromLocalStorage(parsedReadValue);
      } 
    } catch (error) {
      console.log(error);
    }

  } 

  const writeSelectedProductsToLocalStorage = async (selectedProducts: Store.CartItem) => {
    try {
      console.log('SELECTED PRODUCTS', selectedProducts);
      if (selectedProducts) {
        await window.localStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(Array.from(selectedProducts.entries())));
        setSelectedProductsFromLocalStorage(selectedProducts);
      } 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readSelectedProductsFromLocalStorage();
  }, [])
  
  return {
    selectedProductsFromLocalStorage,
    writeSelectedProductsToLocalStorage
  }

  
}

export default useCardLocalStorage;