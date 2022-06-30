// Helper function that takes a wind direction string and returns the associated degrees
// assists in knowing how much to rotate an arrow icon
function windDirectionToDegrees(directionString){
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', "NW", "NNW"];
    return 22.5 * directions.indexOf(directionString);
}

export default windDirectionToDegrees;