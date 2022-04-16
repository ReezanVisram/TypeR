import { getRepository, Repository } from 'typeorm';
import Vendor from './Vendor';

export interface VendorRepositoryContract {
    findOneById(id: number): Promise<Vendor>;
    findAllVendors(): Promise<Vendor[]>;
}

export default class VendorRepository implements VendorRepositoryContract {
    private repository: Repository<Vendor>;

    constructor() {
        this.repository = getRepository(Vendor);
    }

    findOneById(id: number): Promise<Vendor> {
        return this.repository.findOneOrFail({ id });
    }

    findAllVendors(): Promise<Vendor[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('vendors')
            .getMany();

        return queryBuilder;
    }
}
