import { Box } from '@mui/material';
import React from 'react';
import ProductInformationBlock from '../../blocks/ProductInformationBlock';
import { containerStyles } from './styles';
import { ProductInformationLayoutProps } from './types';

const ProductInformationLayout: React.FC<ProductInformationLayoutProps> = (
    props
) => {
    console.log('rendering product information layout');
    return (
        <Box sx={containerStyles}>
            <ProductInformationBlock />
        </Box>
    );
};
export default ProductInformationLayout;
