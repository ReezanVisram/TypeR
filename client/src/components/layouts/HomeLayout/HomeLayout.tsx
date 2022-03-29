import { Typography } from '@mui/material';
import React from 'react';
import TopBar from '../../organisms/TopBar';
import usePresenter from './HomeLayout.presenter';
import { HomeLayoutProps } from './types';

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    const { topBar } = usePresenter(props);
    return (
        <div>
            <TopBar {...topBar} />
        </div>
    );
};

export default HomeLayout;
