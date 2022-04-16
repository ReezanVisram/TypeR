import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { getVendorsUseCase } from './BottomBar.interactor';
import { BottomBarProps } from './types';

const usePresenter = (props: BottomBarProps): BottomBarProps => {
    const { data } = useQuery('getVendors', getVendorsUseCase);
    const history = useHistory();

    const handleNavClick = (to: string) => {
        history.push(to);
    };

    props = {
        ...props,
        bottomNav: {
            vendors: data?.map((value, index) => {
                return {
                    name: value.name,
                    link: value.link,
                };
            }),
        },
    };
    return props;
};

export default usePresenter;
