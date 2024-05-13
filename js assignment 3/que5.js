function correctWord(sentence, wrong, correct) {
    // Create a regular expression with the wrong word and the global flag for global search
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi');
    
    // Replace all occurrences of the wrong word with the correct word
    const correctedSentence = sentence.replace(regex, correct);
    
    return correctedSentence;
}

// Example usage:
const sentence = "He is the bset player in the wrld.";
const correctedSentence = correctWord(sentence, "bset", "best");
console.log(correctedSentence); // Output: "He is the best player in the wrld."
