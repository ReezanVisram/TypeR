import { Product } from '../../entities';
import { ProductNumber } from '../../lib/types';
import { ProductsControllerContract, ProductsServiceContract } from './types';

export default class ProductsController implements ProductsControllerContract {
    private getProductsService: ProductsServiceContract;

    constructor(getProductsService: ProductsServiceContract) {
        this.getProductsService = getProductsService;
    }

    getProductById(id: number): Promise<Product> {
        return this.getProductsService.getProductById(id);
    }

    getProductNumbers(): Promise<ProductNumber[]> {
        return this.getProductsService.getProductNumbers();
    }
}
