import { Product } from "../../domain/models/Product";
import { ProductrRepository } from "../../domain/repositories/ProductrRepository";
import { api } from "../sources/ApiSource";

export class ProductrRepositoryImpl implements ProductrRepository {
    async getProducts(): Promise<Product[]> {
        const response = await api.get('/products');
        return response.data as Product[];
    }
    async getProductById(id: number): Promise<Product> {
        const response = await api.get(`/products/${id}`);
        return response.data as Product;
    }
    addProduct(product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateProduct(product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}