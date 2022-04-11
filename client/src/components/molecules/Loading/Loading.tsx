import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { containerStyles } from './styles';
import { LoadingProps } from './types';

const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <Box sx={containerStyles}>
            <CircularProgress />
        </Box>
    );
};

export default Loading;
