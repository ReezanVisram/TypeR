import { ProductRepositoryContract, Product } from '../../entities';
import { ProductNumber } from '../../lib/types';
import { ProductsServiceContract } from './types';

export default class ProductsService implements ProductsServiceContract {
    private productRepository: ProductRepositoryContract;

    constructor(productRepository: ProductRepositoryContract) {
        this.productRepository = productRepository;
    }

    getProductById(id: number): Promise<Product> {
        return this.productRepository.findOneById(id);
    }

    async getProductNumbers(): Promise<ProductNumber[]> {
        const diyKitNumbers: ProductNumber = {
            productType: 'Diy-Kits',
            productNumber: (await this.productRepository.findAllDiyKits())
                .length,
        };

        const switchNumbers: ProductNumber = {
            productType: 'Switches',
            productNumber: (await this.productRepository.findAllSwitches())
                .length,
        };

        const keycapsNumbers: ProductNumber = {
            productType: 'Keycaps',
            productNumber: (await this.productRepository.findAllKeycaps())
                .length,
        };

        const pcbsNumbers: ProductNumber = {
            productType: 'PCBs',
            productNumber: (await this.productRepository.findAllPcbs()).length,
        };

        return [diyKitNumbers, switchNumbers, keycapsNumbers, pcbsNumbers];
    }
}
