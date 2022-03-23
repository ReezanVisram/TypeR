import { Product } from '../../entities';
import { SwitchesControllerContract, SwitchesServiceContract } from './types';

export default class SwitchesController implements SwitchesControllerContract {
    private getSwitchesService: SwitchesServiceContract;

    constructor(getSwitchesService: SwitchesServiceContract) {
        this.getSwitchesService = getSwitchesService;
    }

    getLinearSwitches(): Promise<Product[]> {
        return this.getSwitchesService.getLinearSwitches();
    }
}
