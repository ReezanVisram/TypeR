import { SaleBarEnum } from '../components/molecules/SaleBar/types';
import { Price } from './types';

export const formatPrice = (price?: string) => {
    if (!price) {
        return '';
    }

    return `$${Number(price).toFixed(2)}`;
};

export const determineSale = (prices?: Price[]): SaleBarEnum => {
    if (!prices) {
        return 'Error';
    }

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

export const formatDate = (date: Date) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ];
    return `${
        months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
};
