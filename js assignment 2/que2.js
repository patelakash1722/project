function calculate(operation, num1, num2) {
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    
    return result;
}

// Example usage:
console.log(calculate('add', 5, 3));       // Output: 8
console.log(calculate('subtract', 10, 4)); // Output: 6
console.log(calculate('multiply', 6, 7));  // Output: 42
console.log(calculate('divide', 20, 5));   // Output: 4
console.log(calculate('divide', 10, 0));   // Output: Cannot divide by zero
console.log(calculate('power', 2, 3));     // Output: Invalid operation
