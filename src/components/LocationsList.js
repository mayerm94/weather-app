import React, {useState} from 'react'
import axios from 'axios';
import {Tooltip, Typography, Box, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemAvatar } from '@mui/material'

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import CitySelector from './CitySelector';

import {APP_STORAGE_KEY} from '../assets/constants';


function LocationsList({setSelectedLocation, selectedLocation}) {
  const [cityToAdd, setCityToAdd] = useState({});
  const [watchedCities, setWatchedCities] = useState(JSON.parse(localStorage.getItem(APP_STORAGE_KEY)) || []);

  const disableNewAdditions = watchedCities.length >= 5;
  const disableDuplicates = !cityToAdd?.zipcode || disableNewAdditions || watchedCities.some((x) => x.zipcode === cityToAdd.zipcode);

  const setWatchedCitiesAndUpdateStorage = (newWatchedCities) => {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(newWatchedCities));
    setWatchedCities(newWatchedCities);
  }

  const addGridDataToLocation = async (location) => {
    const gridQueryResult = await axios(
      `https://api.weather.gov/points/${location.latitude},${location.longitude}`,
      // {  headers: { 'User-Agent': USER_AGENT} }  <- TODO: Figure out why docs say user-agent is required but chrome strips out with error "Refused to set unsafe header"
    );
    if(gridQueryResult.status !== 200){
      console.log(`ERROR: Received HTTP ${gridQueryResult.status} when querying for grid points`);
    }
    location.gridX = gridQueryResult?.data?.properties?.gridX;
    location.gridY = gridQueryResult?.data?.properties?.gridY;
  }

  const addCityToList = async () => {
    await addGridDataToLocation(cityToAdd);
    setWatchedCitiesAndUpdateStorage(watchedCities.concat([cityToAdd]));
  }

  const setSelectedLocationClick = async (location) => {
    // If there was a network failure we might not have grid data
    // this makes sure there is grid data added in that event
    if(!location.gridX || !location.gridY){
      await addGridDataToLocation(location);
    }
    setSelectedLocation(location);
  }

  return (
    <Box sx={{ height: "100vh", backgroundColor: '#E9DAC1',}}>
      <Typography sx={{paddingTop:'2vw', paddingBottom: '2vw'}}variant="h4" align="center">{'Cities of Interest'}</Typography>

      {/* Search And Add Button */}
      <Grid container direction="row" justifyContent="center"  alignItems="center">
        {/* TODO: Add prop here that will remove already selected values */}
        <CitySelector disabled={disableNewAdditions} setSelectedValue={(value) => setCityToAdd(value)}/>
        <Tooltip title={!disableDuplicates? "Add City": "Maximum of 5 Cities With No Duplicates"} arrow>
          <span>
          <IconButton
            aria-label="add location"
            size="large"
            disabled={disableDuplicates}
            onClick={addCityToList}>
              <AddCircleIcon fontSize="inherit" />
          </IconButton>
          </span>
        </Tooltip>
      </Grid>

      {/* List Of Selected Locations */}
      <List >
        {watchedCities.map( (location) => 
          <ListItem
            key={`${location.zipcode}-item`}
            secondaryAction={
              // TODO: Could optimize this by removing by index. Fine for now given that N is at max 5
              <IconButton  aria-label="remove city" onClick={() => { setWatchedCitiesAndUpdateStorage(watchedCities.filter((x) => x.zipcode !== location.zipcode))}} >
                <RemoveCircleOutlineIcon />
              </IconButton>
            }
          >
              <ListItemButton sx={{ borderTop: 2   }} onClick={() => {setSelectedLocationClick(location);}}>
                <ListItemAvatar>
                    <LocationOnIcon sx={{ color: (location.zipcode === selectedLocation.zipcode )? "#54BAB9" : "#F7ECDE"}}  />
                </ListItemAvatar>
                <ListItemText primary={location.city} secondary={location.state}/>
            </ListItemButton>
          </ListItem>,
          )}
      </List>
    </Box>
  )
}

export default LocationsList