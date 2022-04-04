import { ProductRepositoryContract, Product } from '../../entities';
import { ProductsServiceContract } from './types';

export default class ProductsService implements ProductsServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getProductById(id: number): Promise<Product> {
        return this.productRepository.findOneById(id);
    }
}
