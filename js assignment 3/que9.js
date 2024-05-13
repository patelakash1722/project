function countWords(paragraph) {
    // Remove leading and trailing white spaces
    paragraph = paragraph.trim();
    // Split the paragraph into words by space
    const words = paragraph.split(/\s+/);
    // Return the number of words
    return words.length;
}

// Example usage:
const paragraph = "hello ,my name is akash patel . i am a student. i am from gujarat  ";
console.log(countWords(paragraph)); // Output: 19
