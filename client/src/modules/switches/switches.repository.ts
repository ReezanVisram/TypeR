import { Product } from '../../lib/types';
import axios from '../../lib/api/axios';
import { BACKEND_URL } from '../../lib/config';

export const getSwitches = async (switchType: string): Promise<Product[]> => {
    const { data } = await axios.get(`${BACKEND_URL}/switches/${switchType}`);
    return data;
};
