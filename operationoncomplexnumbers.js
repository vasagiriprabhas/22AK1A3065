// Import math.js (if using npm)
const math = require('mathjs');

// Create two complex numbers
const z1 = math.complex(3, 4); // 3 + 4i
const z2 = math.complex(1, 2); // 1 + 2i

// Addition
const sum = math.add(z1, z2);
console.log(`Sum: ${sum}`); // Output: 4 + 6i

// Subtraction
const difference = math.subtract(z1, z2);
console.log(`Difference: ${difference}`); // Output: 2 + 2i

// Multiplication
const product = math.multiply(z1, z2);
console.log(`Product: ${product}`); // Output: -5 + 10i

// Conjugate
const conjugate = math.conj(z1);
console.log(`Conjugate of z1: ${conjugate}`); // Output: 3 - 4i
