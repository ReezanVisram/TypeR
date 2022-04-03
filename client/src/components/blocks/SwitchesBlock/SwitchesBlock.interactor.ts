import { getSwitches } from '../../../modules/switches/switches.repository';

export const getSwitchesUseCase = (switchType: string) => {
    return getSwitches(switchType);
};
