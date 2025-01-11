import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Tabs, Tab, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import NonProductionReadiness from './NonProductionReadiness';
import ProductionReadiness from './ProductionReadiness';

const dataCenters = [
  {
    name: "Sterling",
    databases: [
      { name: "MySQL", NonProduction: "Started", Production: "Inprogress" },
      { name: "MongoDB", NonProduction: "Inprogress", Production: "Not started" },
      { name: "Oracle", NonProduction: "Not started", Production: "Started" }
    ],
  },
  {
    name: "Manassas",
    databases: [
      { name: "PostgreSQL", NonProduction: "Started", Production: "Inprogress" },
      { name: "Redis", NonProduction: "Started", Production: "Started" },
      { name: "Cassandra", NonProduction: "Inprogress", Production: "Not started" }
    ],
  },
  {
    name: "Lewisville",
    databases: [
      { name: "SQL Server", NonProduction: "Not started", Production: "Inprogress" },
      { name: "MariaDB", NonProduction: "Started", Production: "Started" },
      { name: "Neo4j", NonProduction: "Inprogress", Production: "Not started" }
    ],
  },
  {
    name: "Garland",
    databases: [
      { name: "SQL Server", NonProduction: "Started", Production: "Not started" },
      { name: "MariaDB", NonProduction: "Not started", Production: "Inprogress" },
      { name: "Neo4j", NonProduction: "Started", Production: "Started" }
    ],
  },
];

const DatabaseDetail = () => {
  const { dbName } = useParams();
  const [activeTab, setActiveTab] = useState(0);

  // Find database details
  const database = dataCenters
    .flatMap(dc => dc.databases)
    .find(db => db.name === dbName);

  if (!database) {
    return <Typography>Database details not found.</Typography>;
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Details for {dbName}
        </Typography>

        {/* Summary Table */}
        <TableContainer component={Paper} sx={{ marginBottom: 3, border: '1px solid #1976d2' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>US POC</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>India POC</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>TEAM DL</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>ETA for Nonprod Readiness</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>ETA for Prod Readiness</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#1976d2', color: '#ffffff' }}>Blockers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>team@example.com</TableCell>
                <TableCell>01-20-2025</TableCell>
                <TableCell>02-15-2025</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="NonProduction Readiness" />
          <Tab label="Production Readiness" />
        </Tabs>
        <Box sx={{ marginTop: 2 }}>
          {activeTab === 0 && <NonProductionReadiness dbName={dbName} status={database.NonProduction} />}
          {activeTab === 1 && <ProductionReadiness dbName={dbName} status={database.Production} />}
        </Box>
      </Paper>
    </Container>
  );
};

export default DatabaseDetail;