import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FaInfoCircle } from 'react-icons/fa';

const DatabaseCard = ({ db, NonProduction, Production }) => {
  const statusStyles = {
    Started: { color: "green" },
    Inprogress: { color: "orange" },
    "Not started": { color: "red" },
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
            {db}
          </Typography>
          <Typography variant="body2" sx={{ ...statusStyles[NonProduction], textAlign: 'center' }}>
            NonProduction: {NonProduction}
          </Typography>
          <Typography variant="body2" sx={{ ...statusStyles[Production], textAlign: 'center' }}>
            Production: {Production}
          </Typography>
          <Link to={`/database/${db}`} style={styles.moreInfo}>
            <FaInfoCircle size={20} />
            <span style={styles.moreInfoText}>More Info</span>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

const styles = {
  moreInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
    cursor: 'pointer',
  },
  moreInfoText: {
    marginLeft: '5px',
    fontSize: '14px',
  },
};

export default DatabaseCard;