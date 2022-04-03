import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import React from 'react';
import SaleBar from '../../molecules/SaleBar';
import usePresenter from './ProductCard.presenter';
import { priceStyles, titleStyles } from './styles';
import { ProductCardProps } from './types';

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { sx, name, imageProps, price, saleBar, click } = usePresenter(props);

    return (
        <Card sx={sx}>
            <CardActionArea onClick={click}>
                <CardMedia {...imageProps} />
                <CardContent>
                    <Typography variant='h2' sx={titleStyles}>
                        {name}
                    </Typography>
                    <Typography sx={priceStyles}>{price}</Typography>
                    <SaleBar {...saleBar} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
