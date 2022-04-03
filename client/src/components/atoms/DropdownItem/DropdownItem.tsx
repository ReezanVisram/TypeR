import { MenuItem } from '@mui/material';
import React from 'react';
import usePresenter from './DropdownItem.presenter';
import { DropdownItemProps } from './types';

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    const { value, displayText } = usePresenter(props);

    return <MenuItem value={value}>{displayText}</MenuItem>;
};
export default DropdownItem;
