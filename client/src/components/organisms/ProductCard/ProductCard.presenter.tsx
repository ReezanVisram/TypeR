import { formatPrice } from '../../../lib/utils';
import { ProductCardProps } from './types';

const usePresenter = (props: ProductCardProps): ProductCardProps => {
    props = {
        ...props,
        price: formatPrice(props.price as string),
    };
    return props;
};

export default usePresenter;
