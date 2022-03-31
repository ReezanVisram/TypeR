import { DiyKitsLayoutProps } from './types';
import { useParams } from 'react-router-dom';

const usePresenter = (props: DiyKitsLayoutProps): DiyKitsLayoutProps => {
    const { productType } = useParams<{ productType: string }>();

    return props;
};

export default usePresenter;
