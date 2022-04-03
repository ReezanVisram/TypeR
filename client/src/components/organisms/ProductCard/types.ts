import { CardMediaProps, CardProps } from '@mui/material';
import { SaleBarProps } from '../../molecules/SaleBar/types';

export type ProductCardProps = CardProps & {
    name?: string;
    imageProps?: CardMediaProps;
    price?: string;
    saleBar?: SaleBarProps;
    click?: () => void;
};
