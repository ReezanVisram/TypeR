import { Box } from '@mui/material';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PRODUCT_ROUTES } from '../../../lib/constants';
import DiyKitsLayout from '../../layouts/DiyKitsLayout';
import SwitchesLayout from '../../layouts/SwitchesLayout';
import TopBar from '../../organisms/TopBar';
import { ProductPageProps } from './types';

const ProductPage: React.FC<ProductPageProps> = (props) => {
    return (
        <div>
            <TopBar />

            <Switch>
                <Route path={PRODUCT_ROUTES.diyKits}>
                    <DiyKitsLayout />
                </Route>
                <Route path={PRODUCT_ROUTES.switches}>
                    <SwitchesLayout />
                </Route>
            </Switch>
        </div>
    );
};

export default ProductPage;
