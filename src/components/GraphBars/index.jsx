/*Ant Desing for analitys*/
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const GraphBars = ({data}) => {
    return (
    <Card>
        <h2>Clicks en botones</h2>
        <BarChart width={950} height={300} data={data}>
            <XAxis dataKey="title" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="clicksButtons1" fill="#8884d8" />
            <Bar dataKey="clicksButtons2" fill="#82ca9d" />
        </BarChart>
    </Card>
    );
};