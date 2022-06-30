import React, { useState, useEffect } from 'react';
import {Stack,Typography } from "@mui/material";
import axios from 'axios';
import moment from 'moment';

import ForecastColumn from './ForecastColumn';



function WeatherData({location}) {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const {gridX, gridY} = location;
        try{
          const gridQueryResult = await axios(`https://api.weather.gov/gridpoints/BOU/${gridX},${gridY}/forecast`);
          if(gridQueryResult.status !== 200){
            console.log(`ERROR: Received HTTP ${gridQueryResult.status} when querying for grid points`);
            return false;
          }
          // Organize data by date so that flat array will be array of arrays where each top level array represents day and sub array is day/night
          const periods = gridQueryResult?.data?.properties?.periods || [];
          const dayNightArrays = {};
          for(const period of periods) {
            const date = moment(period.startTime).date();
            if(!dayNightArrays[date]){
              dayNightArrays[date] = [period]
            }else{
              dayNightArrays[date].push(period);
            }
          }
          const sortedPeriods = Object.values(dayNightArrays).sort((a, b) => (a[0].startTime > b[0].startTime) ? 1 : -1)
          // Add this organized data onto the result, we'll keep the extra info on data around for future extension
          gridQueryResult.data.properties.sortedPeriods = sortedPeriods;
          setWeatherData(gridQueryResult.data);
        } catch (error){return false}
        return true;
      };
      // Implement a Re-try if api doesn't give us 200 on first try
      if(!fetchData()){
        const millisecondsToWait = 750;
        setTimeout(function() {
           fetchData()
        }, millisecondsToWait);
      };
    }, [location]);

  return (
    weatherData?.properties?
      <Stack direction="row" spacing={"1vw"} justifyContent="center" key={`forecast-stack`} >
         {weatherData.properties.sortedPeriods.slice(0,7).map((x) => <ForecastColumn key={`forecast-${x[0].number}`} dayForecast={x}/>)}
      </Stack>
    :  <Typography sx={{paddingTop:'2vw', paddingLeft: '2vw' }}variant="h4" align="center">{'Add/Select A City Of Interest To Begin'}</Typography>

  )
}

export default WeatherData