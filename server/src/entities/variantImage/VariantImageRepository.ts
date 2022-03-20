import { Repository, getRepository } from 'typeorm';
import VariantImage from './VariantImage';

export interface VariantImageRepositoryContract {
    findOneById(id: number): Promise<VariantImage>;
}

export default class VariantImageRepository
    implements VariantImageRepositoryContract
{
    private repository: Repository<VariantImage>;

    constructor() {
        this.repository = getRepository(VariantImage);
    }

    findOneById(id: number): Promise<VariantImage> {
        return this.repository.findOneOrFail({ id });
    }
}
