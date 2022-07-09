import React, { useState, useMemo } from 'react';
import { Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {darkModePalette, lightModePalette} from './assets/themes';
import WeatherData from './components/WeatherData';
import LocationsList from './components/LocationsList';

function App() {
  const [selectedLocation, setSelectedLocation] = useState({});
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: 
          prefersDarkMode ? darkModePalette : lightModePalette
      }),
    [prefersDarkMode],
  );

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
