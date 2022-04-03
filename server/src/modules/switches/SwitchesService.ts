import { ProductRepositoryContract, Product } from '../../entities/product';
import { SwitchesServiceContract } from './types';

export default class SwitchesService implements SwitchesServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getAllSwitches(): Promise<Product[]> {
        return this.productRepository.findAllSwitches();
    }

    getLinearSwitches(): Promise<Product[]> {
        return this.productRepository.findAllLinearSwitches();
    }

    getTactileSwitches(): Promise<Product[]> {
        return this.productRepository.findAllTactileSwitches();
    }

    getClickySwitches(): Promise<Product[]> {
        return this.productRepository.findAllClickySwitches();
    }
}
