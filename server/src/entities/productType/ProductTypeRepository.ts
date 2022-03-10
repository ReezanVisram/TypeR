import { getRepository, Repository } from 'typeorm';
import ProductType from './ProductType';

export interface ProductTypeRepositoryContract {
    findOneById(id: number): Promise<ProductType>;
}

export default class ProductTypeRepository
    implements ProductTypeRepositoryContract
{
    private repository: Repository<ProductType>;

    constructor() {
        this.repository = getRepository(ProductType);
    }

    findOneById(id: number): Promise<ProductType> {
        return this.repository.findOneOrFail({ id });
    }
}
