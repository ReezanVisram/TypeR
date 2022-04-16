import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeLayout from '../../layouts/HomeLayout';
import TopBar from '../../organisms/TopBar';
import { HomePageProps } from './types';

const HomePage: React.FC<HomePageProps> = (props) => {
    return (
        <div>
            <TopBar />

            <Switch>
                <Route path='/'>
                    <HomeLayout />
                </Route>
            </Switch>
        </div>
    );
};

export default HomePage;
