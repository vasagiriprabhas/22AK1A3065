// Function to extract and print even-length substrings (words)
function printEvenLengthWords(str) {
    // Split the input string into words
    const words = str.split(' ');

    // Iterate over each word
    for (const word of words) {
        // Check if the word length is even
        if (word.length % 2 === 0) {
            console.log(word);
        }
    }
}

// Example usage
const inputString = "sun rises in the east.";
printEvenLengthWords(inputString);
