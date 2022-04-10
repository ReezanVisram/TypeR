import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout';
import ProductInformationPage from './components/pages/ProductInformationPage';
import ProductsPage from './components/pages/ProductsPage';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/product'>
                    <ProductInformationPage />
                </Route>
                <Route path='/products'>
                    <ProductsPage />
                </Route>
                <Route path='/'>
                    <HomeLayout />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
