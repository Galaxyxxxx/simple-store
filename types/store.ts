declare namespace Store {
  interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
  }

  interface CartProduct extends Product {
    quantity?: number,
  }

  interface CardSelectedProduct {
    quantity: number,
    product?: Product
  }

  interface CardItemDetails {
    quantity: number;
    
  }
  interface Categories {
    id: number,
    name: "AGD" | "Headphones" | "Monitors" | "Smartphones" | "Smartwatches" | "TVs" | "VR Headsets";
  }
  interface Filters {
    id: number,
    state: boolean
  }


  type CartItem = Map<number, CardItemDetails>;
}

export default Store;
