function findTax(salary) {
    let taxAmount;

    switch(true) {
        case salary <= 500000:
            taxAmount = 0;
            break;
        case salary <= 1000000:
            taxAmount = salary * 0.1;
            break;
        case salary <= 1500000:
            taxAmount = salary * 0.2;
            break;
        default:
            taxAmount = salary * 0.3;
    }

    return taxAmount;
}

// Example usage:
console.log(findTax(400000));   // Output: 0 (No tax)
console.log(findTax(600000));   // Output: 60000 (10% of 600000)
console.log(findTax(1200000));  // Output: 240000 (20% of 1200000)
console.log(findTax(2000000));  // Output: 600000 (30% of 2000000)
