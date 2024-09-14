function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let from = parseInt(prompt("Enter the starting number of the range:"));
let to = parseInt(prompt("Enter the ending number of the range:"));

console.log(`Prime numbers between ${from} and ${to} are:`);

for (let i = from; i <= to; i++) {
    if (isPrime(i)) console.log(i);
}
