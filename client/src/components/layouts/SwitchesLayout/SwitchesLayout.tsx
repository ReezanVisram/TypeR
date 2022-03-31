import { Typography } from '@mui/material';
import React from 'react';
import usePresenter from './SwitchesLayout.presenter';
import { SwitchesLayoutProps } from './types';

const SwitchesLayout: React.FC<SwitchesLayoutProps> = (props) => {
    usePresenter(props);
    return (
        <div>
            <Typography>Switches</Typography>
        </div>
    );
};

export default SwitchesLayout;
