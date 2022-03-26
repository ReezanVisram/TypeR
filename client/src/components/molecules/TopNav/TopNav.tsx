import { Container, Toolbar } from '@mui/material';
import React from 'react';
import NavItem from '../../atoms/NavItem';
import usePresenter from './TopNav.presenter';
import { TopNavProps } from './types';

const TopNav: React.FC<TopNavProps> = (props) => {
    const { navItems } = usePresenter(props);

    const navItemComponents =
        navItems?.map((navItem, index) => {
            <NavItem key={index} {...navItem} />;
        }) || [];

    return (
        <Container>
            <Toolbar>{navItemComponents}</Toolbar>
        </Container>
    );
};

export default TopNav;
