import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Price } from '../../../lib/types';
import { determineSale, formatPrice } from '../../../lib/utils';
import { getProductUseCase } from './ProductInformationBlock.interactor';
import { ProductInformationBlockProps } from './types';

const usePresenter = (
    props: ProductInformationBlockProps
): ProductInformationBlockProps => {
    const { id } = useParams<{ id: string }>();

    const { data: product, isLoading } = useQuery(['getProduct', id], () =>
        getProductUseCase(Number(id))
    );

    props = {
        isLoading,
        title: product?.productTitle,
        graph: {
            data: product?.variants[0].prices,
        },
        informationCard: {
            image: product?.images[0].src,
            vendor: product?.vendor,
            link: product?.link,
            price: formatPrice(product?.variants[0].prices[0].price as string),
            saleBar: {
                type: determineSale(product?.variants[0].prices as Price[]),
            },
        },
    };

    return props;
};

export default usePresenter;
