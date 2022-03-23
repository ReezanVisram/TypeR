import { ProductRepositoryContract, Product } from '../../entities/product';
import { SwitchesServiceContract } from './types';

export default class SwitchesService implements SwitchesServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    async getLinearSwitches(): Promise<Product[]> {
        return this.productRepository.findAllLinearSwitches();
    }
}