function calc(operator, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    }

    let result;
    if (operator === '+') {
        result = a + b;
    } else if (operator === '-') {
        result = a - b;
    } else if (operator === '*') {
        result = a * b;
    } else if (operator === '/') {
        result = a / b;
    } else if (operator === '%') {
        result = a % b;
    } else if (operator === '**') {
        result = a ** b;
    } else {
        result = 'unknown operation';
    }

    return result;
}

console.log(calc('+', 1, 2));
console.log(calc('-', 1, 2));
console.log(calc('*', 1, 2));
console.log(calc('/', 1, 2));
console.log(calc('%', 1, 2));
console.log(calc('**', 1, 2));
console.log(calc('aaaa', 1, 2));
console.log(calc('aaaa', 1));
console.log(calc('aaaa'));
