function countConsonantsAndVowels(str) {
    // Convert the string to lowercase to simplify the comparison
    str = str.toLowerCase();
    
    // Define arrays containing vowels and consonants
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    let vowelCount = 0;
    let consonantCount = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
        // Check if the character is a consonant
        else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const counts = countConsonantsAndVowels(str);

console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
