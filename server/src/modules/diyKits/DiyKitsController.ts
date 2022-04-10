import { Product } from '../../entities';
import { DiyKitsControllerContract, DiyKitsServiceContract } from './types';

export default class DiyKitsController implements DiyKitsControllerContract {
    private getDiyKitsService: DiyKitsServiceContract;

    constructor(getDiyKitsService: DiyKitsServiceContract) {
        this.getDiyKitsService = getDiyKitsService;
    }

    getAllDiyKits(): Promise<Product[]> {
        return this.getDiyKitsService.getAllDiyKits();
    }
}
