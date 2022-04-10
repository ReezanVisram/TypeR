import { Product } from '../../../lib/types';
import { getProduct } from '../../../modules/products/products.repository';

export const getProductUseCase = async (id: number): Promise<Product> => {
    console.log(id);
    return getProduct(id);
};
