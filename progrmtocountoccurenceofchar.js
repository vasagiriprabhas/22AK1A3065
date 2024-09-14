function countCharacterOccurrences(str) {
    const charCount = {};

    // Iterate over each character in the string
    for (const char of str) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage
const inputString = "hello world";
const result = countCharacterOccurrences(inputString);

console.log("Character occurrences:");
for (const [char, count] of Object.entries(result)) {
    console.log(`${char}: ${count}`);
}
