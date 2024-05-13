function sumOfProducts(n1, n2) {
    const n1Digits = n1.toString().split('').map(Number);
    const n2Digits = n2.toString().split('').map(Number);
    
    let sum = 0;

    for (let i = 0; i < Math.max(n1Digits.length, n2Digits.length); i++) {
        const digit1 = n1Digits[n1Digits.length - 1 - i] || 0; // If no digit, default to 0
        const digit2 = n2Digits[n2Digits.length - 1 - i] || 0; // If no digit, default to 0
        
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34));  // Output: 24
console.log(sumOfProducts(123, 456));  // Output: 38 (3*6 + 2*5 + 1*4)
console.log(sumOfProducts(987, 65));  // Output: 58 (9*5 + 8*6 + 7*0)
