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
  interface CartItem {
    id: number,
    quantity: number,
  }
  interface CartProduct {
    quantity: number,
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
}

export default Store;
