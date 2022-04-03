import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DropdownItem from '../../atoms/DropdownItem';
import usePresenter from './Dropdown.presenter';
import { DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { label, inputLabel, select, items } = usePresenter(props);

    const options =
        items?.map((value, index) => {
            return (
                <MenuItem value={value.value} key={index}>
                    {value.displayText}
                </MenuItem>
            );
        }) || [];

    return (
        <Box minWidth={'200px'}>
            <FormControl fullWidth>
                <InputLabel {...inputLabel}>{label}</InputLabel>
                <Select {...select}>{options}</Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;
