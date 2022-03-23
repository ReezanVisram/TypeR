import { Product } from '../../entities';

export interface SwitchesControllerContract {
    getLinearSwitches(): Promise<Product[]>;
}

export interface SwitchesServiceContract {
    getLinearSwitches(): Promise<Product[]>;
}
