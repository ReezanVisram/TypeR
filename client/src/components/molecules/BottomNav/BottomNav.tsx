import React from 'react';
import { Grid } from '@mui/material';
import { BottomNavProps } from './types';
import usePresenter from './BottomNav.presenter';
import ExternalLink from '../../atoms/ExternalLink';

const BottomNav: React.FC<BottomNavProps> = (props) => {
    const { vendors } = usePresenter(props);

    const vendorsView = vendors?.map((value, index) => {
        return <ExternalLink {...value} key={index} />;
    });

    return (
        <>
            <Grid container columns={2}>
                <Grid item xs={2} sm={1}>
                    {vendorsView}
                </Grid>
            </Grid>
        </>
    );
};

export default BottomNav;
