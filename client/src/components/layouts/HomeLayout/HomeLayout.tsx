import React from 'react';
import HomeBlock from '../../blocks/HomeBlock';
import { HomeLayoutProps } from './types';

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <HomeBlock />
        </div>
    );
};

export default HomeLayout;
