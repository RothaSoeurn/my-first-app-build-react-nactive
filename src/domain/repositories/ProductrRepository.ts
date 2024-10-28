import { Product } from "../models/Product";

export interface ProductrRepository {
    getProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    addProduct(product: Product): Promise<void>;
    updateProduct(product: Product): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}