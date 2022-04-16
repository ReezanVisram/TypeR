import { Vendor } from '../../entities';

export interface VendorsControllerContract {
    getAllVendors(): Promise<Vendor[]>;
}

export interface VendorsServiceContract {
    getAllVendors(): Promise<Vendor[]>;
}
