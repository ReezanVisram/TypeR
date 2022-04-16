import { Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import NavItem from '../../atoms/NavItem';
import usePresenter from './TopNav.presenter';
import { TopNavProps } from './types';

const TopNav: React.FC<TopNavProps> = (props) => {
    const { navItems, titleProperties, title, containerStyles } =
        usePresenter(props);

    const navItemComponents =
        navItems?.map((navItem, index) => {
            return <NavItem key={index} {...navItem} />;
        }) || [];

    return (
        <Container sx={containerStyles}>
            <a
                href='/'
                style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#D1E8E2',
                }}
            >
                <Typography {...titleProperties}>{title}</Typography>
            </a>
            <Toolbar disableGutters>{navItemComponents}</Toolbar>
        </Container>
    );
};

export default TopNav;
