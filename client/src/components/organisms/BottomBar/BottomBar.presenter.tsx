import { useQuery } from 'react-query';
import { getVendorsUseCase } from './BottomBar.interactor';
import { BottomBarProps } from './types';

const usePresenter = (props: BottomBarProps): BottomBarProps => {
    const { data } = useQuery('getVendors', getVendorsUseCase);

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
