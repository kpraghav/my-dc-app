import React from 'react';
import { Typography } from '@mui/material';
import CustomDataGrid from './CustomDataGrid';

const ProductionReadiness = ({ dbName, status }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Production Readiness for {dbName}
      </Typography>
      <Typography>Status: {status}</Typography>
      <CustomDataGrid />
    </div>
  );
};

export default ProductionReadiness;
