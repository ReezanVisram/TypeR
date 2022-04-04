import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import SaleBar from '../../molecules/SaleBar';
import usePresenter from './ProductInformationCard.presenter';
import { containerStyles, linkStyles, textStyles } from './styles';
import { ProductInformationCardProps } from './types';

const ProductInformationCard: React.FC<ProductInformationCardProps> = (
    props
) => {
    const { image, price, vendor, link, saleBar } = usePresenter(props);
    return (
        <Box sx={containerStyles}>
            <img src={image} width={'60%'} />
            <Link href={link} target='_blank'>
                <Typography variant='h4' sx={linkStyles}>
                    {vendor}
                </Typography>
            </Link>
            <Typography variant='body1' sx={textStyles}>
                {price}
            </Typography>
            <SaleBar {...saleBar} />
        </Box>
    );
};

export default ProductInformationCard;
