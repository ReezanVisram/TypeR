import { InputLabelProps, SelectChangeEvent, SelectProps } from '@mui/material';
import { DropdownItemProps } from '../../atoms/DropdownItem';

export type DropdownProps = {
    label?: string;
    inputLabel?: InputLabelProps;
    select?: SelectProps;
    items?: DropdownItemProps[];
};
