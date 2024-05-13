function repeatedSumOfDigits(number) {
    while (number >= 10) {
        let sum = 0;
        // Convert the number to a string to iterate over its digits
        const digits = number.toString();
        // Calculate the sum of digits
        for (let digit of digits) {
            sum += parseInt(digit, 10);
        }
        // Update the number with the sum
        number = sum;
    }
    return number;
}

// Example usage:
console.log(repeatedSumOfDigits(456)); // Output: 6
