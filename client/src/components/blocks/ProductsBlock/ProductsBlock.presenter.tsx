import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { determineSale } from '../../../lib/utils';
import { getProductsUseCase } from './ProductsBlock.interactor';
import { ProductsBlockProps } from './types';

const usePresenter = (props: ProductsBlockProps): ProductsBlockProps => {
    const history = useHistory();
    let { productType, subType } = useParams<{
        productType: string;
        subType: string;
    }>();

    if (!subType) {
        subType = '';
    }

    const { data: products, isLoading } = useQuery(
        ['getProducts', productType, subType],
        () => getProductsUseCase(productType, subType)
    );

    const handleProduct = (id: number) => {
        history.push(`/product/${id}`);
    };

    props = {
        isLoading,
        productsList: products?.map((value, index) => {
            return {
                name: value.productTitle,
                imageProps: {
                    component: 'img',
                    src: value.images[0].src,
                    height: 225,
                },
                raised: true,
                price: value.variants[0].prices.pop()?.price,
                click: () => handleProduct(value.id),
                saleBar: {
                    type: determineSale(value.variants[0].prices),
                },
                key: index,
            };
        }),
    };

    return props;
};

export default usePresenter;
