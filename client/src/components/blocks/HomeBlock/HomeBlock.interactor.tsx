import { getProductNumbers } from '../../../modules/products/products.repository';

export const getProductNumbersUseCase = async () => {
    return getProductNumbers();
};
