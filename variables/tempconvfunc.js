function celsiusToFahrenheit(celcius) {
var celtofar;
celtofar= (celcius*9)/5 +32;
console.log(celcius+' oC is '+celtofar+' oF')
}
function fahrenheitToCelsius(fahrenheit) { 
var fartocel;
fartocel=((fahrenheit-32)*5)/9;
console.log(fahrenheit+' oF is '+fartocel+' oC')
}
celsiusToFahrenheit(10);
fahrenheitToCelsius(50);


