import { Repository, getRepository } from 'typeorm';
import ProductImage from './ProductImage';

export interface ProductImageRepositoryContract {
    findOneById(id: number): Promise<ProductImage>;
}

export default class ProductImageRepository
    implements ProductImageRepositoryContract
{
    private repository: Repository<ProductImage>;

    constructor() {
        this.repository = getRepository(ProductImage);
    }

    findOneById(id: number): Promise<ProductImage> {
        return this.repository.findOneOrFail({ id });
    }
}
