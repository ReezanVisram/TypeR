import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsLayout from '../../layouts/ProductsLayout';
import BottomBar from '../../organisms/BottomBar';
import TopBar from '../../organisms/TopBar';
import { ProductsPageProps } from './types';

const ProductsPage: React.FC<ProductsPageProps> = (props) => {
    return (
        <div>
            <TopBar />

            <Switch>
                <Route path='/products/:productType/:subType?'>
                    <ProductsLayout />
                </Route>
            </Switch>

            <BottomBar />
        </div>
    );
};

export default ProductsPage;
