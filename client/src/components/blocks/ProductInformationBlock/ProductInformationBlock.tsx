import { Paper } from '@mui/material';
import React from 'react';
import { productCardStyles } from './styles';
import { ProductInformationBlockProps } from './types';

const ProductInformationBlock: React.FC<ProductInformationBlockProps> = (
    props
) => {
    return (
        <Paper sx={productCardStyles} elevation={8}>
            <h3>Product Information</h3>
        </Paper>
    );
};

export default ProductInformationBlock;
