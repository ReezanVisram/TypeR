import { useQuery } from 'react-query';
import { getProductNumbersUseCase } from './HomeBlock.interactor';
import { HomeBlockProps } from './types';

const usePresenter = (props: HomeBlockProps): HomeBlockProps => {
    const { data: productNumbers } = useQuery(
        'getProductNumbers',
        getProductNumbersUseCase
    );
    props = {
        ...props,
        productNumbers,
    };
    return props;
};

export default usePresenter;
