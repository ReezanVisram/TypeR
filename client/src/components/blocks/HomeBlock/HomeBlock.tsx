import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ProductNumber from '../../organisms/ProductNumber';
import usePresenter from './HomeBlock.presenter';
import {
    cardContainerStyles,
    containerStyles,
    gridStyles,
    journeyStyles,
    tagStyles,
} from './styles';
import { HomeBlockProps } from './types';

const HomeBlock: React.FC<HomeBlockProps> = (props) => {
    const { productNumbers } = usePresenter(props);

    const productNumberViews = productNumbers?.map((value, index) => {
        return (
            <Grid item xs={4} sm={2} md={1}>
                <ProductNumber {...value} key={index} />
            </Grid>
        );
    });

    return (
        <Box sx={containerStyles}>
            <Grid container direction='column' sx={gridStyles}>
                <Grid item>
                    <Box>
                        <Typography variant='h2' sx={tagStyles} color='#116466'>
                            The number-one source for <br />
                            custom keyboard components.
                        </Typography>
                        <Typography variant='h5'>
                            Find every component you need, from kits to keycaps,
                            along with recommendations on when to buy.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container columns={4} spacing={10} sx={gridStyles}>
                        {productNumberViews}
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={cardContainerStyles}>
                <Paper sx={journeyStyles} elevation={4}>
                    <Typography variant='h5'>
                        Choose your first component and start your custom
                        keyboard journey today!
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default HomeBlock;
