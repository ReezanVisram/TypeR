import React from 'react';
import { Button, Box } from '@mui/material';
import usePresenter from './NavItem.presenter';
import { NavItemProps } from './types';

const NavItem: React.FC<NavItemProps> = (props) => {
    const { name, button } = usePresenter(props);
    return (
        <Box>
            <Button {...button}>{name}</Button>
        </Box>
    );
};

export default NavItem;
