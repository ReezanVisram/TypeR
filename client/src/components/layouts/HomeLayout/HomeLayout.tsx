import React from 'react';
import HomeBlock from '../../blocks/HomeBlock';
import { HomeLayoutProps } from './types';

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    return (
        <div>
            <HomeBlock />
        </div>
    );
};

export default HomeLayout;
