import { Grid, Typography } from '@mui/material';
import React from 'react';
import BottomNav from '../../molecules/BottomNav';
import usePresenter from './BottomBar.presenter';
import { gridStyles, itemStyles } from './styles';
import { BottomBarProps } from './types';

const BottomBar: React.FC<BottomBarProps> = (props) => {
    const { bottomNav } = usePresenter(props);
    return (
        <footer
            style={{
                marginTop: '10vh',
                backgroundColor: '#116466',
                borderTop: '5px solid #2C3531',
            }}
        >
            <Typography variant='h3' align='center' color='#D1E8E2'>
                TypeR
            </Typography>
            <Grid container columns={2} sx={gridStyles}>
                <Grid item xs={2} sm={1} sx={itemStyles}>
                    <Typography variant='h5'>Vendors</Typography>
                    <BottomNav {...bottomNav} />
                </Grid>
                <Grid item xs={2} sm={1} sx={itemStyles}>
                    <Typography variant='h5' align='center'>
                        About TypeR
                    </Typography>
                    <Typography variant='body2' color='#FFCB9A' align='center'>
                        TypeR is a hub for custom mechanical keyboard components
                        built by Reezan Visram. The components are <br />
                        scraped from the listed vendors and presented on this
                        site, along with recommendations on when to buy and what
                        to buy.
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

export default BottomBar;
