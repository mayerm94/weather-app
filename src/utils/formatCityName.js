
function formatCityName(option){
    // Zip code is the unique identifier, it is the baseline requirement. If not present, return empty string
    if(!option?.zipcode){
        return '';
    }
    return `${option.city}, ${option.state} ${option.zipcode}`;
}
  
  export default formatCityName;