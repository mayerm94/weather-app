import './App.css';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import WeatherData from './components/WeatherData';
import LocationsList from './components/LocationsList';

function App() {
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <Box
        sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#54BAB9',
        }}
    >
        <Grid container direction="row">
          <LocationsList setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} />
          <WeatherData location={selectedLocation} />
        </Grid>
    </Box>
  );
}

export default App;
