import { Product } from '../../entities';
import { ProductNumber } from '../../lib/types';

export interface ProductsControllerContract {
    getProductById(id: number): Promise<Product>;
    getProductNumbers(): Promise<ProductNumber[]>;
}

export interface ProductsServiceContract {
    getProductById(id: number): Promise<Product>;
    getProductNumbers(): Promise<ProductNumber[]>;
}
