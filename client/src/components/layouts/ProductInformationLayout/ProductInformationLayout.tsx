import React from 'react';
import { ProductInformationLayoutProps } from './types';

const ProductInformationLayout: React.FC<ProductInformationLayoutProps> = (
    props
) => {
    console.log('rendering product information layout');
    return (
        <div>
            <h2>Product Information</h2>
        </div>
    );
};
export default ProductInformationLayout;
