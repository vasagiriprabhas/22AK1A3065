javascript
function classifyNumber(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }

    if (sum > num) return "Abundant";
    if (sum === num) return "Perfect";
    return "Deficient";
}

let number = parseInt(prompt("Enter a number:"));
console.log(`${number} is ${classifyNumber(number)}`);