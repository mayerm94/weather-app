import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

import formatCityName from '../utils/formatCityName';
import cityData from '../assets/locations.json';


const autocompleteStyle = {
  marginLeft: "1vw",
  width: "20vw",
  '@media (max-width:780px)': {  width: "80vw"},
  backgroundColor: 'background.secondary.light'
}


function CitySelector({disabled, setSelectedValue}) {

  return (
    <Autocomplete
      id="city-selector"
      sx={autocompleteStyle}
      onChange={(_, value) => setSelectedValue(value)}
      options={cityData}
      autoHighlight
      freeSolo
      disabled={disabled}
      isOptionEqualToValue={(option, value) => option.zipcode === value.zipcode}
      getOptionLabel={(option) =>  formatCityName(option)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={(cityData.length === 0)? "Fetching City Data" : "Enter a City/ZipCode"}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
  />
  )
}


export default CitySelector