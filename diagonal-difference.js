/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let diag1=0, diag2=0;
    let size = arr.length;
    let j = size-1;
    
    for (let i = 0; i < size; i++) {
        diag1 += arr[i][i];
        diag2 += arr[i][j];
        j--;
    }

    return Math.abs(diag1 - diag2);
}
