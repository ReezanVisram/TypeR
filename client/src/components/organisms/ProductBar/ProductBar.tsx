import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Dropdown from '../../molecules/Dropdown';
import usePresenter from './ProductBar.presenter';
import { barStyles, navStyles, productTypeStyles } from './styles';
import { ProductBarProps } from './types';

const ProductBar: React.FC<ProductBarProps> = (props) => {
    const { productType, navItems } = usePresenter(props);

    const dropdowns =
        navItems?.map((value, index) => {
            return <Dropdown {...value} key={index} />;
        }) || [];

    return (
        <Paper sx={barStyles} elevation={2}>
            <Typography variant='h3' sx={productTypeStyles}>
                {productType}
            </Typography>
            <Box sx={navStyles}>{dropdowns}</Box>
        </Paper>
    );
};

export default ProductBar;
