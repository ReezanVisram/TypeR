import { Product } from '../../entities';

export interface SwitchesControllerContract {
    getAllSwitches(): Promise<Product[]>;
    getSwitchById(id: number): Promise<Product>;
    getLinearSwitches(): Promise<Product[]>;
    getTactileSwitches(): Promise<Product[]>;
    getClickySwitches(): Promise<Product[]>;
}

export interface SwitchesServiceContract {
    getAllSwitches(): Promise<Product[]>;
    getSwitchById(id: number): Promise<Product>;
    getLinearSwitches(): Promise<Product[]>;
    getTactileSwitches(): Promise<Product[]>;
    getClickySwitches(): Promise<Product[]>;
}
