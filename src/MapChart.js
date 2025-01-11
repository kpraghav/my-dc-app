import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import DatabaseCard from "./DatabaseCard";
import DataCenterPieChart from "./DataCenterPieChart";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const dataCenters = [
  {
    id: 1,
    name: "Sterling",
    coordinates: [-77.4286, 39.0062],
    databases: [
      { name: "MySQL", NonProduction: "Started", Production: "Inprogress" },
      { name: "MongoDB", NonProduction: "Inprogress", Production: "Not started" },
      { name: "Oracle", NonProduction: "Not started", Production: "Started" }
    ],
  },
  {
    id: 2,
    name: "Manassas",
    coordinates: [-77.475143, 38.750660],
    databases: [
      { name: "PostgreSQL", NonProduction: "Started", Production: "Inprogress" },
      { name: "Redis", NonProduction: "Started", Production: "Started" },
      { name: "Cassandra", NonProduction: "Inprogress", Production: "Not started" }
    ],
  },
  {
    id: 3,
    name: "Lewisville",
    coordinates: [-97.006111, 33.038334],
    databases: [
      { name: "SQL Server", NonProduction: "Not started", Production: "Inprogress" },
      { name: "MariaDB", NonProduction: "Started", Production: "Started" },
      { name: "Neo4j", NonProduction: "Inprogress", Production: "Not started" }
    ],
  },
  {
    id: 4,
    name: "Garland",
    coordinates: [-96.635277, 32.907223],
    databases: [
      { name: "SQL Server", NonProduction: "Started", Production: "Not started" },
      { name: "MariaDB", NonProduction: "Not started", Production: "Inprogress" },
      { name: "Neo4j", NonProduction: "Started", Production: "Started" }
    ],
  },
];

const MapChart = () => {
  const [selectedDC, setSelectedDC] = useState(null);

  const handleMarkerClick = (dc) => {
    setSelectedDC(dc);
  };

  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f0f4f8' }}>
      <Grid container spacing={3} sx={{ flex: 1 }}>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ height: '100%', padding: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
              Data Centers Overview
            </Typography>
            <Box sx={{ height: 'calc(100% - 48px)' }}>
              <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                  {({ geographies }) => (
                    <>
                      {geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} style={styles.geography} />
                      ))}
                    </>
                  )}
                </Geographies>
                {dataCenters.map((dc) => (
                  <Marker key={dc.id} coordinates={dc.coordinates}>
                    <circle
                      r={10}
                      fill="#E42A1D"
                      stroke="#fff"
                      strokeWidth={2}
                      onClick={() => handleMarkerClick(dc)}
                      style={styles.marker}
                    />
                  </Marker>
                ))}
              </ComposableMap>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ height: '100%', padding: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
              Selected Data Center Details
            </Typography>
            {selectedDC ? (
              <div>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: 2 }}>
                  {selectedDC.name}
                </Typography>
                <Grid container spacing={2}>
                  {selectedDC.databases.map((db, index) => (
                    <DatabaseCard
                      key={index}
                      db={db.name}
                      NonProduction={db.NonProduction}
                      Production={db.Production}
                    />
                  ))}
                </Grid>
              </div>
            ) : (
              <Typography sx={{ textAlign: 'center', color: '#777' }}>
                Select a Data Center to see details.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
          Additional Information
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {dataCenters.map((dc) => (
            <Grid item key={dc.id}>
              <DataCenterPieChart dataCenter={dc} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

const styles = {
  geography: {
    default: { fill: "#D6D6DA", outline: "none" },
    hover: { fill: "#F53", outline: "none" },
    pressed: { fill: "#E42", outline: "none" },
  },
  marker: {
    cursor: "pointer",
  },
};

export default MapChart;