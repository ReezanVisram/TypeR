import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../../organisms/ProductCard';
import { containerStyles, gridItem } from './styles';
import usePresenter from './SwitchesBlock.presenter';
import { SwitchesBlockProps } from './types';

const SwitchesBlock: React.FC<SwitchesBlockProps> = (props) => {
    const { switchesList } = usePresenter(props);

    const switchesCards =
        switchesList?.map((value, index) => {
            return (
                <Grid item xs={4} md={2} xl={1} sx={gridItem}>
                    <ProductCard {...value} key={index} />
                </Grid>
            );
        }) || [];

    return (
        <Grid container spacing={2} columns={8} sx={containerStyles}>
            {switchesCards}
        </Grid>
    );
};

export default SwitchesBlock;
