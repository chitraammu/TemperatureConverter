export const celciusToFahrenheit=(celcius)=> {
    let fahrenheit = (celcius * 9/5 ) + 32;
    return Number(fahrenheit.toFixed(1));
}

export const fahrenheitToCelcius =(fahrenheit)=> {
   let celcius = (fahrenheit - 32 ) * 5/9;
   return Number(celcius.toFixed(1));
}