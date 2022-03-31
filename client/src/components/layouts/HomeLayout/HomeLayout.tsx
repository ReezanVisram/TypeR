import React from 'react';
import TopBar from '../../organisms/TopBar';
import usePresenter from './HomeLayout.presenter';
import { HomeLayoutProps } from './types';

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    return (
        <div>
            <TopBar />
        </div>
    );
};

export default HomeLayout;
