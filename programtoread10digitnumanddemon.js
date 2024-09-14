// Function to read a large integer from the user
function readBigInt(promptText) {
    const input = prompt(promptText);
    return BigInt(input);
}

// Read two large integers
const num1 = readBigInt("Enter a 40-digit integer:");
const num2 = readBigInt("Enter a 10-digit integer:");

// Demonstrate relational operations
console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`num1 == num2: ${num1 == num2}`);
console.log(`num1 != num2: ${num1 != num2}`);
console.log(`num1 > num2: ${num1 > num2}`);
console.log(`num1 < num2: ${num1 < num2}`);
console.log(`num1 >= num2: ${num1 >= num2}`);
console.log(`num1 <= num2: ${num1 <= num2}`);
