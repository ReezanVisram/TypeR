import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../../organisms/ProductCard';
import { containerStyles, gridItem } from './styles';
import usePresenter from './ProductsBlock.presenter';
import { ProductsBlockProps } from './types';
import Loading from '../../molecules/Loading';

const ProductsBlock: React.FC<ProductsBlockProps> = (props) => {
    const { isLoading, productsList } = usePresenter(props);

    const productsCards =
        productsList?.map((value, index) => {
            return (
                <Grid item xs={4} md={2} xl={1} sx={gridItem}>
                    <ProductCard {...value} key={index} />
                </Grid>
            );
        }) || [];

    let componentView;

    if (isLoading) {
        componentView = <Loading />;
    } else {
        componentView = (
            <Grid container spacing={2} columns={8} sx={containerStyles}>
                {productsCards}
            </Grid>
        );
    }

    return <>{componentView}</>;
};

export default ProductsBlock;
