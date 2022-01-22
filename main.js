function calc(operator, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    }

    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
        default:
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
