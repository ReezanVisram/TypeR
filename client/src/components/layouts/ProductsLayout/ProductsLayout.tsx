import { Box } from '@mui/material';
import React from 'react';
import ProductsBlock from '../../blocks/ProductsBlock';
import ProductBar from '../../organisms/ProductBar';
import { containerStyles } from './styles';
import usePresenter from './ProductsLayout.presenter';
import { ProductsLayoutProps } from './types';

const ProductsLayout: React.FC<ProductsLayoutProps> = (props) => {
    const { productBar } = usePresenter(props);
    return (
        <div>
            <ProductBar {...productBar} />
            <Box sx={containerStyles}>
                <ProductsBlock />
            </Box>
        </div>
    );
};

export default ProductsLayout;
