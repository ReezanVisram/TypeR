import React from 'react';
import { Paper } from '@mui/material';
import { PriceGraphProps } from './types';
import { Price } from '../../../lib/types';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';
import usePresenter from './PriceGraph.presenter';
import { graphContainerStyles } from './styles';

const PriceGraph: React.FC<PriceGraphProps> = (props) => {
    const { data } = usePresenter(props);

    const xAxis = [];

    return (
        <Paper sx={graphContainerStyles}>
            <ResponsiveContainer width='100%' minHeight='100px'>
                <LineChart data={data}>
                    <Line
                        type='monotone'
                        dataKey='price'
                        stroke='#116466'
                        dot={false}
                    />
                    <YAxis stroke='#116466' />
                    <XAxis
                        stroke='#116466'
                        label='Time'
                        dataKey='xAxis'
                        tick={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default PriceGraph;
