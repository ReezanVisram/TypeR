import { Paper, Typography } from '@mui/material';
import React from 'react';
import usePresenter from './ProductNumber.presenter';
import { ProductNumberProps } from './types';

const ProductNumber: React.FC<ProductNumberProps> = (props) => {
    const { productType, productNumber } = usePresenter(props);

    return (
        <Paper>
            <Typography variant='h6' align='center' color='#D1E8E2'>
                {productNumber}
            </Typography>
            <Typography variant='body1' align='center' color='#D1E8E2'>
                {productType}
            </Typography>
        </Paper>
    );
};

export default ProductNumber;
