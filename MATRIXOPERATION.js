javascript
function getMatrixInput(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = prompt(`Enter row ${i + 1} (comma-separated):`).split(",").map(Number);
        matrix.push(row);
    }
    return matrix;
}

function addMatrices(A, B) {
    return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

function subtractMatrices(A, B) {
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

function multiplyMatrices(A, B) {
    return A.map((row, i) =>
        B[0].map((_, j) =>
            row.reduce((sum, val, k) => sum + val * B[k][j], 0)
        )
    );
}

function traceMatrix(A) {
    return A.reduce((sum, row, i) => sum + row[i], 0);
}

let rows = parseInt(prompt("Enter rows:"));
let cols = parseInt(prompt("Enter columns:"));

let matrixA = getMatrixInput(rows, cols);
let matrixB = getMatrixInput(rows, cols);

console.log("A + B:", addMatrices(matrixA, matrixB));
console.log("A - B:", subtractMatrices(matrixA, matrixB));
console.log("A * B:", multiplyMatrices(matrixA, matrixB));

if (rows === cols) {
    console.log("Trace of A:", traceMatrix(matrixA));
} else {
    console.log("Trace not applicable (not a square matrix).");
}