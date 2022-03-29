import { SxProps, TypographyProps } from '@mui/material';
import { NavItemProps } from '../../atoms/NavItem';

export type TopNavProps = {
    title?: string;
    navItems?: NavItemProps[];
    titleProperties?: TypographyProps;
    containerStyles?: SxProps;
};
