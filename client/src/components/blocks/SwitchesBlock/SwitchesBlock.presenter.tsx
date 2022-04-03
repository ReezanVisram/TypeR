import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { determineSale } from '../../../lib/utils';
import { getSwitchesUseCase } from './SwitchesBlock.interactor';
import { SwitchesBlockProps } from './types';

const usePresenter = (props: SwitchesBlockProps): SwitchesBlockProps => {
    const history = useHistory();
    let { switchType } = useParams<{ switchType: string }>();

    if (!switchType) {
        switchType = '';
    }

    const { data: switches } = useQuery(['getAllSwitches', switchType], () =>
        getSwitchesUseCase(switchType)
    );

    const handleProduct = (id: number) => {
        history.push(`/products/${id}`);
    };

    props = {
        switchesList: switches?.map((value, index) => {
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
