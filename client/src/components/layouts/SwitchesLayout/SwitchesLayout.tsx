import { Box, Typography } from '@mui/material';
import React from 'react';
import SwitchesBlock from '../../blocks/SwitchesBlock';
import ProductBar from '../../organisms/ProductBar';
import { containerStyles } from './styles';
import usePresenter from './SwitchesLayout.presenter';
import { SwitchesLayoutProps } from './types';

const SwitchesLayout: React.FC<SwitchesLayoutProps> = (props) => {
    const { switchesBar } = usePresenter(props);
    return (
        <div>
            <ProductBar {...switchesBar} />
            <Box sx={containerStyles}>
                <SwitchesBlock />
            </Box>
        </div>
    );
};

export default SwitchesLayout;
