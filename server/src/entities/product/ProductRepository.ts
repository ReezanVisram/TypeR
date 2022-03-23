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
            .createQueryBuilder('product_types')
            .leftJoinAndSelect('product_types.type', 'product_product_types')
            .where('product_types.type = Linear switch')
            .getMany();

        console.log(queryBuilder);

        return queryBuilder;
    }
}
