const fs = require('fs');

// Create a file with at least 10 lines of characters
const data = `Line 1: This is the first line.
Line 2: This is the second line.
Line 3: This is the third line.
Line 4: This is the fourth line.
Line 5: This is the fifth line.
Line 6: This is the sixth line.
Line 7: This is the seventh line.
Line 8: This is the eighth line.
Line 9: This is the ninth line.
Line 10: This is the tenth line.`;

fs.writeFileSync('example.txt', data);
console.log('File created successfully.');
const fs = require('fs');

// Function to read 'n' characters from the start of the file and display them in reverse
function readAndReverse(n) {
    const data = fs.readFileSync('example.txt', 'utf8');
    const substring = data.substring(0, n);
    const reversed = substring.split('').reverse().join('');
    console.log(`Reversed substring: ${reversed}`);
}

// Example usage
const n = 50; // Number of characters to read
readAndReverse(n);

