import { Product } from '../../lib/types';
import axios from '../../lib/api/axios';
import { BACKEND_URL } from '../../lib/config';

export const getProduct = async (id: number): Promise<Product> => {
    const { data } = await axios.get(`${BACKEND_URL}/products/${id}`);
    return data;
};
