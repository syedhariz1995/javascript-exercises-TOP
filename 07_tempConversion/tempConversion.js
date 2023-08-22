const convertToCelsius = function(temp) {
  return Math.round((temp - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(temp) {
  return Math.round((temp* (9/5) + 32) * 10) / 10
};


console.log(convertToCelsius(32))
console.log(convertToCelsius(100)) 
console.log(convertToCelsius(-100)) 


console.log(convertToFahrenheit(0)) 
console.log(convertToFahrenheit(73.2)) 
console.log(convertToFahrenheit(-10)) 



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
