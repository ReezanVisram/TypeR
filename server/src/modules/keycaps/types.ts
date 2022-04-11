import { Product } from '../../entities';

export interface KeycapsControllerContract {
    getAllKeycaps(): Promise<Product[]>;
}

export interface KeycapsServiceContract {
    getAllKeycaps(): Promise<Product[]>;
}
