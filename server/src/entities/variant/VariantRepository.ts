import { Repository, getRepository } from 'typeorm';
import Variant from './Variant';

export interface VariantRepositoryContract {
    findOneById(id: number): Promise<Variant>;
}

export default class VariantRepository implements VariantRepositoryContract {
    private repository: Repository<Variant>;

    constructor() {
        this.repository = getRepository(Variant);
    }

    findOneById(id: number): Promise<Variant> {
        return this.repository.findOneOrFail({ id });
    }
}
