import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsLayout from '../../layouts/ProductsLayout';
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
        </div>
    );
};

export default ProductsPage;
