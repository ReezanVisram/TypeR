import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SwitchesLayoutProps } from './types';

const usePresenter = (props: SwitchesLayoutProps): SwitchesLayoutProps => {
    const history = useHistory();
    const { productType } = useParams<{ productType: string }>();
    console.log(productType);
    const [activeSubType, setActiveSubType] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        history.push(
            `/products/${productType}/${event.target.value as string}`
        );
        setActiveSubType(event.target.value as string);
    };

    // props = {
    //     switchesBar: {
    //         productType: productType,
    //         navItems: [
    //             {
    //                 label: 'Type',
    //                 inputLabel: {
    //                     id: 'type-label',
    //                 },
    //                 select: {
    //                     labelId: 'type-label',
    //                     id: 'type-select',
    //                     label: 'Type',
    //                     value: activeSubType,
    //                     onChange: handleChange,
    //                 },
    //                 items: [
    //                     {
    //                         displayText: 'Linear switches',
    //                         value: 'linear',
    //                     },
    //                     {
    //                         displayText: 'Tactile switches',
    //                         value: 'tactile',
    //                     },
    //                     {
    //                         displayText: 'Clicky switches',
    //                         value: 'clicky',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // };
    return props;
};

export default usePresenter;
