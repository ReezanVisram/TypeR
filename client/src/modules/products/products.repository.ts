import { Product } from '../../lib/types';
import axios from '../../lib/api/axios';
import { BACKEND_URL } from '../../lib/config';

export const getProducts = async (
    productType: string,
    subType: string
): Promise<Product[]> => {
    const { data } = await axios.get(
        `${BACKEND_URL}/${productType}/${subType}`
    );
    return data;
};

export const getProduct = async (id: number): Promise<Product> => {
    const { data } = await axios.get(`${BACKEND_URL}/products/${id}`);
    return data;
};
