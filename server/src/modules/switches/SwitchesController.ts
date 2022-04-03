import { Product } from '../../entities';
import { SwitchesControllerContract, SwitchesServiceContract } from './types';

export default class SwitchesController implements SwitchesControllerContract {
    private getSwitchesService: SwitchesServiceContract;

    constructor(getSwitchesService: SwitchesServiceContract) {
        this.getSwitchesService = getSwitchesService;
    }

    getAllSwitches(): Promise<Product[]> {
        return this.getSwitchesService.getAllSwitches();
    }

    getLinearSwitches(): Promise<Product[]> {
        return this.getSwitchesService.getLinearSwitches();
    }

    getTactileSwitches(): Promise<Product[]> {
        return this.getSwitchesService.getTactileSwitches();
    }

    getClickySwitches(): Promise<Product[]> {
        return this.getSwitchesService.getClickySwitches();
    }
}
