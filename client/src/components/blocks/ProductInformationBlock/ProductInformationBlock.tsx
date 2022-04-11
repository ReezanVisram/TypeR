import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Loading from '../../molecules/Loading';
import PriceGraph from '../../organisms/PriceGraph';
import ProductInformationCard from '../../organisms/ProductInformationCard';
import usePresenter from './ProductInformationBlock.presenter';
import {
    cardGridStyles,
    productCardStyles,
    productTitleStyles,
} from './styles';
import { ProductInformationBlockProps } from './types';

const ProductInformationBlock: React.FC<ProductInformationBlockProps> = (
    props
) => {
    const { isLoading, title, graph, informationCard } = usePresenter(props);

    let componentView;

    if (isLoading) {
        componentView = <Loading />;
    } else {
        componentView = (
            <Paper sx={productCardStyles} elevation={8}>
                <Typography variant='h3' sx={productTitleStyles}>
                    {title}
                </Typography>
                <Grid container columns={2} spacing={2} sx={cardGridStyles}>
                    <Grid item xs={2} lg={1}>
                        <PriceGraph {...graph} />
                    </Grid>
                    <Grid item xs={2} lg={1}>
                        <ProductInformationCard {...informationCard} />
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    return <>{componentView}</>;
};

export default ProductInformationBlock;
