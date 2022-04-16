import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import usePresenter from './ExternalLink.presenter';
import { ExternalLinkProps } from './types';

const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
    const { name, link } = usePresenter(props);
    return (
        <a
            href={link}
            target='_blank'
            style={{ textDecoration: 'none', color: '#FFCB9A' }}
        >
            <Typography variant='body1'>{name}</Typography>
        </a>
    );
};

export default ExternalLink;
