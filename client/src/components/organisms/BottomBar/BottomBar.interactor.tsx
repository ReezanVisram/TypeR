import { getVendors } from '../../../modules/vendors/vendors.repository';

export const getVendorsUseCase = () => {
    return getVendors();
};
