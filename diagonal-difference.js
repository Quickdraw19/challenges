/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let diag1 = 0;
    let diag2 = 0;
    let arrSize = arr.length;
    let lastIndex = arrSize - 1;
    
    for (let i = 0; i < arrSize; i++) {
        // Sum the digits starting with [0,0], stepping down 1 and to the right by one
        diag1 += arr[i][i];
        
        // Sum the digits starting with [0, lastIndex], stepping down 1 and to the left by 1
        diag2 += arr[i][lastIndex];
        lastIndex--;
    }
    
    return Math.abs(diag1 - diag2);
}
