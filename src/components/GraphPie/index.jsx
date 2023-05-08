import { Card } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const GraphPie = ({data}) => {
    return (
        <Card>
            <h2>Tiempo en pantalla</h2>
            <PieChart width={600} height={300}>
                <Pie
                    data={data}
                    dataKey="screenTime"
                    nameKey="title"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            <Tooltip />
            <Legend />
            </PieChart>
        </Card>
    );
};