import React from 'react';
import { Paper } from '@mui/material';
import { PriceGraphProps } from './types';
import { Price } from '../../../lib/types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import usePresenter from './PriceGraph.presenter';
import { graphContainerStyles } from './styles';

const PriceGraph: React.FC<PriceGraphProps> = (props) => {
    const { data } = usePresenter(props);

    return (
        <Paper sx={graphContainerStyles}>
            <LineChart data={data} width={200} height={400}>
                <Line
                    type='monotone'
                    dataKey='price'
                    stroke='#116466'
                    dot={false}
                />
                <YAxis stroke='#116466' label='($)' />
            </LineChart>
        </Paper>
    );
};

export default PriceGraph;
