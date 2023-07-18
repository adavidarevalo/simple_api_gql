import { RESTDataSource } from "@apollo/datasource-rest";

export class ProductsApi extends RESTDataSource {
  override baseURL: string = "http://localhost:3000/";

  async getAllProducts() {
    const { products } = await this.get(`/products/`);

    return products;
  }
  async getAllProductById(id: number) {
    const { products } = await this.get(`/products/${encodeURI(`${id}`)}`);

    if (!products) return {};

    return products;
  }

  async createProduct(arg: { name: string; price: number; stock: number }) {
    const { product } = await this.post(`/products/`, {
      body: arg,
    });

    return product;
  }

  async updateProduct(arg: {
    id: string;
    name: string;
    price: number;
    stock: number;
  }) {
    const { id, name, price, stock } = arg;

    const { product } = await this.patch(`/products/${encodeURI(`${id}`)}`, {
      body: { name, price, stock },
    });

    return product;
  }

  async deleteProduct({ id }: { id: string }) {
    const { product } = await this.delete(`/products/${encodeURI(`${id}`)}`);

    return product;
  }
}
