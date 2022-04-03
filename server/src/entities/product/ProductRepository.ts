import { getRepository, Repository } from 'typeorm';
import Product from './Product';

export interface ProductRepositoryContract {
    findOneById(id: number): Promise<Product>;
    findAllSwitches(): Promise<Product[]>;
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

    findAllSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :linearType', { linearType: 'Linear switch' })
            .orWhere('types.type = :tactileType', {
                tactileType: 'Tactile switch',
            })
            .orWhere('types.type = :clickyType', {
                clickyType: 'Clicky switch',
            })
            .getMany();

        return queryBuilder;
    }

    findAllLinearSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.types', 'type')
            .where('type.type = :type', { type: 'Linear switch' })
            .getMany();

        return queryBuilder;
    }
}
