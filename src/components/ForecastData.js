import React from 'react'
import {Box, Typography, Grid, Tooltip} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import windDirectionToDegrees from '../utils/windDirectionToDegrees';

function ForecastData({forecast}) {
  return (
    <>
      <Typography align="center" key={`weather-title-${forecast.name}`} sx={{ fontSize: 20, fontWeight: 'bold', paddingTop: "1vw", paddingBottom: "1vw"}}>{`${forecast.name}`}</Typography>
      {/* Weather image pulled from link */}
      <Tooltip title={forecast.detailedForecast} placement="bottom">
        <Box
          component="img"
          sx={{
            width: "10vw",
            height: "10vw",
          }}
          aria-label={forecast.shortForecast}
          src={forecast.icon}
          key={`weather-icon-${forecast.name}`}
        />
      </Tooltip>
      {/* Temperature */}
      <Typography sx={{ fontSize: 26, fontWeight: 'medium', paddingTop: "1vw" }} align="center" key={`temp-title-${forecast.name}`}>{`${forecast.temperature}°${forecast.temperatureUnit}`}</Typography>
      {/* Windspeed and direction */}
      <Grid
        sx={{
          paddingTop: "1vw",
        }}
        align="center"
      >
        <Typography sx={{ fontSize: 20, fontWeight: 'medium'}} key={`wind-title-${forecast.name}`}>{`${forecast.windSpeed}`}</Typography>
        <ArrowUpwardIcon sx={{transform: `rotate(${windDirectionToDegrees(forecast.windDirection)}deg)`}}/>
      </Grid>
      <Box
        sx={{
          height: "2vw",
        }}
      />
    </>
  )
}

export default ForecastData