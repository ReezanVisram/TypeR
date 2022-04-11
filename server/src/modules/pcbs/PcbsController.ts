import { Product } from '../../entities';
import { PcbsControllerContract, PcbsServiceContract } from './types';

export default class PcbsController implements PcbsControllerContract {
    private getPcbsService: PcbsServiceContract;

    constructor(getPcbsService: PcbsServiceContract) {
        this.getPcbsService = getPcbsService;
    }

    getAllPcbs(): Promise<Product[]> {
        return this.getPcbsService.getAllPcbs();
    }
}
