import { Product } from '../../lib/types';
import axios from '../../lib/api/axios';
import { BACKEND_URL } from '../../lib/config';

export const getAllSwitches = async (): Promise<Product[]> => {
    const { data } = await axios.get(`${BACKEND_URL}/switches`);
    console.log(data);
    return data;
};
