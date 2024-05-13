let string = 'INDIA';

// Convert the string to an array of characters
let chars = string.split('');

// Insert 'ONES' after the third character
chars.splice(3, 0, 'O', 'N', 'E', 'S');

// Join the array back into a string
let modifiedString = chars.join('');

console.log(modifiedString); // Output: 'INDONESIA'
