import { Product } from '../../entities';

export interface PcbsControllerContract {
    getAllPcbs(): Promise<Product[]>;
}

export interface PcbsServiceContract {
    getAllPcbs(): Promise<Product[]>;
}
