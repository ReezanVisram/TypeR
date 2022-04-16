import axios from 'axios';
import { BACKEND_URL } from '../../lib/config';
import { Vendor } from '../../lib/types';

export const getVendors = async (): Promise<Vendor[]> => {
    const { data } = await axios.get(`${BACKEND_URL}/vendors`);
    return data;
};
