import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Typography, Paper } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const getStatusData = (databases) => {
  const data = [
    { name: 'Started', value: 0, databases: [] },
    { name: 'Inprogress', value: 0, databases: [] },
    { name: 'Completed', value: 0, databases: [] },
    { name: 'Not started', value: 0, databases: [] },
  ];

  databases.forEach((db) => {
    if (db.NonProduction === 'Started' || db.Production === 'Started') {
      data[0].value++;
      data[0].databases.push(db.name);
    }
    if (db.NonProduction === 'Inprogress' || db.Production === 'Inprogress') {
      data[1].value++;
      data[1].databases.push(db.name);
    }
    if (db.NonProduction === 'Completed' || db.Production === 'Completed') {
      data[2].value++;
      data[2].databases.push(db.name);
    }
    if (db.NonProduction === 'Not started' || db.Production === 'Not started') {
      data[3].value++;
      data[3].databases.push(db.name);
    }
  });

  return data;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, databases } = payload[0].payload;

    return (
      <Paper sx={{ padding: 1, backgroundColor: '#fff', border: '1px solid #ccc' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>{name}</Typography>
        <Typography variant="body2">
          {databases.length > 0 ? databases.join(', ') : 'No databases'}
        </Typography>
      </Paper>
    );
  }

  return null;
};

const DataCenterPieChart = ({ dataCenter }) => {
  const data = getStatusData(dataCenter.databases);

  return (
    <Paper sx={{ padding: 2, margin: 2, borderRadius: '8px', backgroundColor: '#ffffff' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
        {dataCenter.name}
      </Typography>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </Paper>
  );
};

export default DataCenterPieChart;