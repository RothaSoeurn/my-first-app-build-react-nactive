import { Product } from "../models/Product";
import { ProductrRepository } from "../repositories/ProductrRepository";

export class GetProductUseCase {
    constructor(private productRepository: ProductrRepository) { }

    async execute(): Promise<Product[]> {
        return await this.productRepository.getProducts();
    }
}