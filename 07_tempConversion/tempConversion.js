//  -32 * (5/9)
const convertToCelsius = function(fahrenheitValue) {
  let exactCelcius = (fahrenheitValue - 32) * (5 / 9) 
  let roundedCelciusString = exactCelcius.toFixed(1);
  return parseFloat(roundedCelciusString);
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
