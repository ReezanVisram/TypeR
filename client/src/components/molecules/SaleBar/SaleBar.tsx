import { Typography } from '@mui/material';
import React from 'react';
import usePresenter from './SaleBar.presenter';
import { badSaleStyle, goodSaleStyle, normalSaleStyle } from './styles';
import { SaleBarProps } from './types';

const SaleBar: React.FC<SaleBarProps> = (props) => {
    const { type } = usePresenter(props);

    let saleBar;

    switch (type) {
        case 'Bad Price':
            saleBar = <Typography sx={badSaleStyle}>{type}</Typography>;
            break;
        case 'Normal Price':
            saleBar = <Typography sx={normalSaleStyle}>{type}</Typography>;
            break;
        case 'Good Price':
            saleBar = <Typography sx={goodSaleStyle}>{type}</Typography>;
            break;
    }

    return <div>{saleBar}</div>;
};

export default SaleBar;
