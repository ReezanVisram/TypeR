import { getSwitches } from '../../../modules/switches/switches.repository';

export const getSwitchesUseCase = (productType: string, switchType: string) => {
    return getSwitches(productType, switchType);
};
