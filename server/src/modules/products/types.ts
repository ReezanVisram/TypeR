import { Product } from '../../entities';

export interface ProductsControllerContract {
    getProductById(id: number): Promise<Product>;
}

export interface ProductsServiceContract {
    getProductById(id: number): Promise<Product>;
}
