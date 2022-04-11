import { ProductRepositoryContract, Product } from '../../entities';
import { KeycapsServiceContract } from './types';

export default class KeycapsService implements KeycapsServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getAllKeycaps(): Promise<Product[]> {
        return this.productRepository.findAllKeycaps();
    }
}
