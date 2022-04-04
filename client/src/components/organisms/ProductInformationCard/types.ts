import { ButtonProps } from '@mui/material';
import { SaleBarProps } from '../../molecules/SaleBar';
import { ProductCardProps } from '../ProductCard';

export type ProductInformationCardProps = {
    image?: string;
    price?: string;
    vendor?: string;
    link?: string;
    saleBar?: SaleBarProps;
};
