
function toCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number'){
        return false
    }
    return (5/9) * (fahrenheit-32)
  }
  
console.log(toCelsius(32))
console.log(toCelsius(100))
console.log(toCelsius('100'))