import React from 'react'
import {Box, Typography, Grid, Tooltip} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import windDirectionToDegrees from '../utils/windDirectionToDegrees';


const titleStyle = {
  fontSize: 20,
  '@media (max-width:780px)': {fontSize: 5},
  fontWeight: 'bold',
  paddingTop: "1vw",
  paddingBottom: "1vw",
  color:'text.dark'
}

const temperatureStyle = {
  fontSize: 26,
  '@media (max-width:780px)': {fontSize: 8},
  fontWeight: 'medium',
  paddingTop: "1vw",
  color:'text.dark'
}

const windSpeedStyle = {
  fontSize: 20,
  '@media (max-width:780px)': {
    fontSize: 5
  },
  fontWeight: 'medium'
}

function ForecastData({forecast}) {
  return (
    <>
      <Typography 
        align="center"
        key={`weather-title-${forecast.name}`}
        sx={titleStyle}>
          {`${forecast.name}`}
      </Typography>
      
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
      <Typography 
        sx={temperatureStyle}
        align="center"
        key={`temp-title-${forecast.name}`}>{
        `${forecast.temperature}°${forecast.temperatureUnit}`}
      </Typography>

      {/* Windspeed and direction */}
      <Grid sx={{paddingTop: "1vw", color:'text.dark'}} align="center">
        <Typography sx={windSpeedStyle} key={`wind-title-${forecast.name}`}>{`${forecast.windSpeed}`}</Typography>
        <ArrowUpwardIcon sx={{transform: `rotate(${windDirectionToDegrees(forecast.windDirection)}deg)`, color:'text.dark'}}/>
      </Grid>

      {/* Space Between Day Sections */}
      <Box sx={{ height: "2vw",}}/>
    </>
  )
}

export default ForecastData