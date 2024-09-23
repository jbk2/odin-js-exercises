//  -32 * (5/9)
const convertToCelsius = function(fahrenheitValue) {
  let exactCelcius = (fahrenheitValue - 32) * (5 / 9) 
  let roundedCelciusString = exactCelcius.toFixed(1);
  return parseFloat(roundedCelciusString);
};

const convertToFahrenheit = function(celciusValue) {
  let exactFarenheit = (celciusValue * (9/5)) + 32
  let roundedFarenheitString = exactFarenheit.toFixed(1);
  return parseFloat(roundedFarenheitString);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
