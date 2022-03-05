import { getRepository, Repository } from 'typeorm';
import Price from './Price';

export interface PriceRepositoryContract {
    findOneById(id: number): Promise<Price>;
}

export default class PriceRepository implements PriceRepositoryContract {
    private repository: Repository<Price>;

    constructor() {
        this.repository = getRepository(Price);
    }

    findOneById(id: number): Promise<Price> {
        return this.repository.findOneOrFail({ id });
    }
}
