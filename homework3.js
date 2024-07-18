function calculate(a, b, operation) {
    if (typeof a !== 'number'){
        return false
    } 

    if (typeof b !== 'number' ) {
        return false
    }

    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
        return false
    }

    if (operation === '+') {
        return a + b
    } else if (operation === '-') {
        return a - b
    } else if (operation === '*') {
        return a * b
    } else if (operation === '/') {
        if (b === 0) {
            return undefined
        }
        return a / b
    }
    return false
}
console.log(calculate(10, 4, '+'))
console.log(calculate(20, 7, '-'))
console.log(calculate(10, 4, '*'))
console.log(calculate(7, 0, '/'))
console.log(calculate(48, 8, '/'))
console.log(calculate("10", 4, '+'))