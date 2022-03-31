import { SwitchesLayoutProps } from './types';
import { useQuery } from 'react-query';
import { getAllSwitchesUseCase } from './SwitchesLayout.interactor';

const usePresenter = (props: SwitchesLayoutProps): SwitchesLayoutProps => {
    const { data: switches } = useQuery(
        'getAllSwitches',
        getAllSwitchesUseCase
    );
    console.log(switches);
    return props;
};

export default usePresenter;
