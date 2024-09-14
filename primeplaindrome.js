function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function nextPalindrome(num) {
    do {
        num++;
    } while (!isPalindrome(num));
    return num;
}

let num = parseInt(prompt("Enter an integer:"));

if (isPrime(num)) {
    console.log("Next palindrome:", nextPalindrome(num));
} else {
    console.log("Not prime");
}
