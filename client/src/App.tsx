import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <HomeLayout />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
