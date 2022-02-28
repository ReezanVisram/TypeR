import { getRepository, Repository } from 'typeorm';
import Product from './Product';

export interface ProductRepositoryContract {
    findOneById(id: number): Promise<Product>;
    findOneByUuid(uuid: string): Promise<Product>;
}

export default class ProductRepository implements ProductRepositoryContract {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    findOneById(id: number): Promise<Product> {
        return this.repository.findOneOrFail({ id });
    }

    findOneByUuid(uuid: string): Promise<Product> {
        return this.repository.findOneOrFail({ uuid });
    }
}
