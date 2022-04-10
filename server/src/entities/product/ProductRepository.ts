import { getRepository, Repository } from 'typeorm';
import Product from './Product';

export interface ProductRepositoryContract {
    findOneById(id: number): Promise<Product>;
    findAllSwitches(): Promise<Product[]>;
    findAllLinearSwitches(): Promise<Product[]>;
    findAllTactileSwitches(): Promise<Product[]>;
    findAllClickySwitches(): Promise<Product[]>;
    findAllDiyKits(): Promise<Product[]>;
}

export default class ProductRepository implements ProductRepositoryContract {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    findOneById(id: number): Promise<Product> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .where('images.product_id =: idOne', { idOne: id })
            .leftJoinAndSelect('products.variants', 'variants')
            .where('variants.product_id = :idTwo', { idTwo: id })
            .leftJoinAndSelect('variants.prices', 'prices')
            .leftJoinAndSelect('products.types', 'types')
            .where('types.product_id = :idThree', { idThree: id })
            .getOneOrFail();

        return queryBuilder;
    }

    findAllSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :type', { type: 'Switches' })
            .getMany();

        return queryBuilder;
    }

    findAllLinearSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :linearType', { linearType: 'Linear switch' })
            .getMany();

        return queryBuilder;
    }

    findAllTactileSwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :tactileType', {
                tactileType: 'Tactile switch',
            })
            .getMany();

        return queryBuilder;
    }

    findAllClickySwitches(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :clickyType', { clickyType: 'Clicky switch' })
            .getMany();

        return queryBuilder;
    }

    findAllDiyKits(): Promise<Product[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('products')
            .leftJoinAndSelect('products.images', 'images')
            .leftJoinAndSelect('products.variants', 'variants')
            .leftJoinAndSelect('variants.prices', 'prices')
            .innerJoinAndSelect('products.types', 'types')
            .where('types.type = :type', { type: 'DIY KIT' })
            .getMany();

        return queryBuilder;
    }
}
