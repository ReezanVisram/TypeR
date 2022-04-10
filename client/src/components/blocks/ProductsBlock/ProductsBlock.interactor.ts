import { getProducts } from '../../../modules/products/products.repository';

export const getProductsUseCase = (productType: string, switchType: string) => {
    return getProducts(productType, switchType);
};
