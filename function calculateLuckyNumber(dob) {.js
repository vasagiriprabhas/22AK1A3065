function calculateLuckyNumber(dob) {
    // Remove the slashes from the date string
    const digits = dob.replace(/\D/g, '');

    // Calculate the sum of all the digits
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }

    // Reduce the sum to a single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}

// Take user input
const dob = prompt("Enter your date of birth in the format dd/mm/yyyy:");

if (/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
    const luckyNumber = calculateLuckyNumber(dob);
    console.log("Your lucky number is: " + luckyNumber);
} else {
    console.log("Please enter the date in the correct format (dd/mm/yyyy).");
}