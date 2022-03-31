import { Product } from '../../entities';

export interface SwitchesControllerContract {
    getAllSwitches(): Promise<Product[]>;
    getLinearSwitches(): Promise<Product[]>;
}

export interface SwitchesServiceContract {
    getAllSwitches(): Promise<Product[]>;
    getLinearSwitches(): Promise<Product[]>;
}
