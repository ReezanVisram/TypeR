import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductInformationLayout from '../../layouts/ProductInformationLayout';
import BottomBar from '../../organisms/BottomBar';
import TopBar from '../../organisms/TopBar';
import { ProductInformationPageProps } from './types';

const ProductInformationPage: React.FC<ProductInformationPageProps> = (
    props
) => {
    return (
        <div>
            <TopBar />

            <Switch>
                <Route path='/product/:id'>
                    <ProductInformationLayout />
                </Route>
            </Switch>

            <BottomBar />
        </div>
    );
};

export default ProductInformationPage;
