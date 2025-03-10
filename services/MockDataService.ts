import products from "@/app/ProductDatabase";

class MockDataService {
  async getProducts() {
    return await products;
  }
}

export default new MockDataService();