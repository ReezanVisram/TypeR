import { Typography } from '@mui/material';
import React from 'react';
import usePresenter from './DiyKitsLayout.presenter';
import { DiyKitsLayoutProps } from './types';

const DiyKitsLayout: React.FC<DiyKitsLayoutProps> = (props) => {
    return (
        <div>
            <Typography variant='h2'>DiyKits</Typography>
        </div>
    );
};

export default DiyKitsLayout;
