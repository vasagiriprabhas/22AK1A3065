function isFibonacci(num) {
    let a = 0, b = 1, position = 1;

    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
        position++;
    }

    return a === num ? position : -1;
}

// Take user input
const num = parseInt(prompt("Enter an integer:"));

const position = isFibonacci(num);

if (position !== -1) {
    console.log(num + " is a Fibonacci number at position " + position + ".");
} else {
    console.log(num + " is not a Fibonacci number.");
}