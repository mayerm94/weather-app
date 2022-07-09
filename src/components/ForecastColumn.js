import React from 'react';
import {Box} from '@mui/material';
import ForecastData from './ForecastData';

// Day forecast from the weather API will look something like this
// {
//     "number": 1,
//     "name": "This Afternoon",
//     "startTime": "2022-06-29T13:00:00-06:00",
//     "endTime": "2022-06-29T18:00:00-06:00",
//     "isDaytime": true,
//     "temperature": 72,
//     "temperatureUnit": "F",
//     "temperatureTrend": null,
//     "windSpeed": "16 mph",
//     "windDirection": "WSW",
//     "icon": "https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium",
//     "shortForecast": "Chance Showers And Thunderstorms",
//     "detailedForecast": "A chance of showers and thunderstorms. Mostly cloudy, with a high near 72. West southwest wind around 16 mph, with gusts as high as 25 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible."
// },

function ForecastColumn({dayForecast}) {
  return (
    <Box key={`weather-column-${dayForecast[0].number}0`}sx={{ width: "10vw", height: "50vw"}}>
      <ForecastData forecast={dayForecast[0]}/>
      {dayForecast[1]? <ForecastData forecast={dayForecast[1]}/>: null}
    </Box>
  )
}


export default ForecastColumn