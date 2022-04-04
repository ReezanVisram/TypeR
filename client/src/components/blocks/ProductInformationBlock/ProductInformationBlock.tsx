import { Paper } from '@mui/material';
import React from 'react';
import PriceGraph from '../../organisms/PriceGraph';
import usePresenter from './ProductInformationBlock.presenter';
import { productCardStyles } from './styles';
import { ProductInformationBlockProps } from './types';

const ProductInformationBlock: React.FC<ProductInformationBlockProps> = (
    props
) => {
    const { graph } = usePresenter(props);
    return (
        <Paper sx={productCardStyles} elevation={8}>
            <h3>Product Information</h3>
            <PriceGraph {...graph} />
        </Paper>
    );
};

export default ProductInformationBlock;
