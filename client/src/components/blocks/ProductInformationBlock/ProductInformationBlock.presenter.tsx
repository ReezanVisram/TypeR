import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProductsUseCase } from './ProductInformationBlock.interactor';
import { ProductInformationBlockProps } from './types';

const usePresenter = (
    props: ProductInformationBlockProps
): ProductInformationBlockProps => {
    const { id } = useParams<{ id: string }>();

    const { data: product } = useQuery('getProduct', () =>
        getProductsUseCase(Number(id))
    );

    props = {
        graph: {
            data: product?.variants[0].prices,
        },
    };

    return props;
};

export default usePresenter;
