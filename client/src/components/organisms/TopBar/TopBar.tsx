import { AppBar } from '@mui/material';
import React from 'react';
import TopNav from '../../molecules/TopNav';
import usePresenter from './TopBar.presenter';
import { TopBarProps } from './types';

const TopBar: React.FC<TopBarProps> = (props) => {
    const { topNav } = usePresenter(props);

    return (
        <AppBar position='static'>
            <TopNav {...topNav} />
        </AppBar>
    );
};

export default TopBar;
