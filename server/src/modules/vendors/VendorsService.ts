import { Vendor, VendorRepositoryContract } from '../../entities';
import { VendorsServiceContract } from './types';

export default class VendorsService implements VendorsServiceContract {
    private vendorRepository: VendorRepositoryContract;

    constructor(vendorRepository: VendorRepositoryContract) {
        this.vendorRepository = vendorRepository;
    }

    getAllVendors(): Promise<Vendor[]> {
        return this.vendorRepository.findAllVendors();
    }
}
