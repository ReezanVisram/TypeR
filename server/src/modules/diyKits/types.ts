import { Product } from '../../entities';

export interface DiyKitsControllerContract {
    getAllDiyKits(): Promise<Product[]>;
}

export interface DiyKitsServiceContract {
    getAllDiyKits(): Promise<Product[]>;
}
