import { ProductRepositoryContract, Product } from '../../entities';
import { PcbsServiceContract } from './types';

export default class PcbsService implements PcbsServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getAllPcbs(): Promise<Product[]> {
        return this.productRepository.findAllPcbs();
    }
}
