import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link
                to={`/products/${productType?.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
            >
                <Typography variant='h3' sx={productTypeStyles}>
                    {productType}
                </Typography>
            </Link>
            <Box sx={navStyles}>{dropdowns}</Box>
        </Paper>
    );
};

export default ProductBar;
