import { SaleBarEnum } from '../components/molecules/SaleBar/types';
import { Price } from './types';

export const formatPrice = (price: string) => {
    return `$${Number(price).toFixed(2)}`;
};

export const determineSale = (prices: Price[]): SaleBarEnum => {
    let average = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        average += Number(prices[i].price);
    }

    const currPrice = Number(prices[prices.length - 1]);
    const diff = currPrice - average;

    if (diff < 0) {
        return 'Good Price';
    } else if (diff > 0) {
        return 'Bad Price';
    }

    return 'Normal Price';
};
