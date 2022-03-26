import { AppBar } from '@mui/material';
import React from 'react';
import TopNav from '../../molecules/TopNav';
import usePresenter from './TopBar.presenter';
import { TopBarProps } from './types';

const TopBar: React.FC<TopBarProps> = (props) => {
    const { title, topNav } = usePresenter(props);

    return (
        <AppBar>
            <TopNav {...topNav} />
        </AppBar>
    );
};

export default TopBar;
