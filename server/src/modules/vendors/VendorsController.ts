import { Vendor } from '../../entities';
import { VendorsControllerContract, VendorsServiceContract } from './types';

export default class VendorsController implements VendorsControllerContract {
    private getVendorsService: VendorsServiceContract;

    constructor(getVendorsService: VendorsServiceContract) {
        this.getVendorsService = getVendorsService;
    }

    getAllVendors(): Promise<Vendor[]> {
        return this.getVendorsService.getAllVendors();
    }
}
