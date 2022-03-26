import { getRepository, Repository } from 'typeorm';
import Product from './Product';

export interface ProductRepositoryContract {
    findOneById(id: number): Promise<Product>;
    findAllLinearSwitches(): Promise<Product[]>;
}

export default class ProductRepository implements ProductRepositoryContract {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    findOneById(id: number): Promise<Product> {
        return this.repository.findOneOrFail({ id });
    }

    findAllLinearSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.types', 'type')
            .where('type = :type', { type: 'Linear switch' })
            .getMany();

        return queryBuilder;
    }
}
