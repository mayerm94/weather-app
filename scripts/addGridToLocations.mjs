import axios from 'axios';



function deDupObjectArray(items, uniqueProperties){  
    const foundValues = {};
    
    const unique = items.filter(element => {
      let propertyValue = "";
      for(const property of uniqueProperties) {
          propertyValue += element[property];
      }
  
      if (!foundValues[propertyValue]) {
        foundValues[propertyValue] = true;
        return true;
      }
    
      return false;
    });
  
    return unique;
}

const haveEntryFor = {};
const result = await axios(
    'https://raw.githubusercontent.com/sjlu/cities/master/locations.json',
);

// TODO: Determine if getting grid data up front is beneficial
// for (const entry of result.data){
//     if(!entry.city || !entry.state || haveEntryFor[entry.city + entry.state]){
//         continue;
//     }
//     const {latitude, longitude} = entry;
//     // TODO: Could look into parallelizing these requests but may run up against a request limit
//     const gridQueryResult = await axios(
//         `https://api.weather.gov/points/${latitude},${longitude}`,
//         {  headers: { 'User-Agent':'weather-app-data-populator, mayerm94@gmail.com' } }
//     );
//     if(gridQueryResult.status != 200){
//         console.log(`ERROR: Received HTTP ${gridQueryResult.status} when querying for grid points`);
//     }
//     entry.gridX = gridQueryResult?.data?.properties?.gridX;
//     entry.gridY = gridQueryResult?.data?.properties?.gridY;
//     finalResult.push(entry);
//     haveEntryFor[entry.city + entry.state] = true;
// }
const finalResult = deDupObjectArray(result.data, ['city', 'state']);


console.log(JSON.stringify(finalResult, null, 2));