import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import {theme} from './assets/themes';
import WeatherData from './components/WeatherData';
import LocationsList from './components/LocationsList';

function App() {
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <Box
          sx={{
           backgroundColor: 'background.primary',
          }}
      >
          <Grid container direction="row">
            <LocationsList setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} />
            <WeatherData location={selectedLocation} />
          </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
