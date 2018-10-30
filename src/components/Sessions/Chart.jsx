import React from 'react';
import  { LineChart, Line } from 'recharts';


export default function Chart(props) {
    return (
        <LineChart width={210} height={38} data={props.grafik}>
            <Line type='monotone' dot={false} dataKey='value' stroke={props.warna} strokeWidth={2} />
        </LineChart>
    );
}