import { ProductRepositoryContract, Product } from '../../entities';
import { DiyKitsServiceContract } from './types';

export default class DiyKitsService implements DiyKitsServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getAllDiyKits(): Promise<Product[]> {
        return this.productRepository.findAllDiyKits();
    }
}
