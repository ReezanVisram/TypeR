import { Product } from '../../entities';
import { KeycapsControllerContract, KeycapsServiceContract } from './types';

export default class KeycapsController implements KeycapsControllerContract {
    private getKeycapsService: KeycapsServiceContract;

    constructor(getKeycapsService: KeycapsServiceContract) {
        this.getKeycapsService = getKeycapsService;
    }

    getAllKeycaps(): Promise<Product[]> {
        return this.getKeycapsService.getAllKeycaps();
    }
}
