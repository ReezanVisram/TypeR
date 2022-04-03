import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SwitchesLayoutProps } from './types';

const usePresenter = (props: SwitchesLayoutProps): SwitchesLayoutProps => {
    const history = useHistory();
    const [activeType, setActiveType] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        history.push(`/products/switches/${event.target.value as string}`);
        setActiveType(event.target.value as string);
    };

    props = {
        switchesBar: {
            productType: 'Switches',
            navItems: [
                {
                    label: 'Type',
                    inputLabel: {
                        id: 'type-label',
                    },
                    select: {
                        labelId: 'type-label',
                        id: 'type-select',
                        label: 'Type',
                        value: activeType,
                        onChange: handleChange,
                    },
                    items: [
                        {
                            displayText: 'Linear switches',
                            value: 'linear',
                        },
                        {
                            displayText: 'Tactile switches',
                            value: 'tactile',
                        },
                        {
                            displayText: 'Clicky switches',
                            value: 'clicky',
                        },
                    ],
                },
            ],
        },
    };
    return props;
};

export default usePresenter;