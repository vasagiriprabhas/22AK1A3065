function findClosestToZeroSum(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    let minSum = Infinity;
    let closestPair = [];

    while (left < right) {
        let sum = arr[left] + arr[right];

        // Update the closest pair if the current sum is closer to zero
        if (Math.abs(sum) < Math.abs(minSum)) {
            minSum = sum;
            closestPair = [arr[left], arr[right]];
        }

        // Move the pointers based on the sum
        if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }

    return minSum;
}

// Example usage
const arr = [1, 5, 3, 2, 4];
const result = findClosestToZeroSum(arr);
console.log(`The sum of the two elements whose sum is closest to zero is: ${result}`);
