function interchangeColumns(matrix) {
    // Check if the matrix is empty or has no columns
    if (matrix.length === 0 || matrix[0].length < 2) {
        console.log("Matrix must have at least 2 columns.");
        return matrix;
    }

    // Loop through each row and swap the first and last columns
    for (let row of matrix) {
        let temp = row[0];
        row[0] = row[row.length - 1];
        row[row.length - 1] = temp;
    }

    return matrix;
}

// Function to print a matrix
function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join(" "));
    });
}

// Example matrix
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log("Original Matrix:");
printMatrix(matrix);

const modifiedMatrix = interchangeColumns(matrix);

console.log("Matrix After Interchanging First and Last Columns:");
printMatrix(modifiedMatrix);
