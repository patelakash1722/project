function reverseString(str) {
    // Split the string into an array of characters
    const chars = str.split('');
    // Reverse the array
    const reversedChars = chars.reverse();
    // Join the array back into a string
    const reversedString = reversedChars.join('');
    // Return the reversed string
    return reversedString;
}

// Example usage:
const input = "Hello";
const reversed = reverseString(input);
console.log(reversed); // Output: "olleH"
