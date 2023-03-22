/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    let len = A.length;
    
    let result = "YES";
    
    for (let i = 0; i < len; i++) {
        if (A[i] + B[i] < k) {
            result = "NO";
        }
    }
    
    return result;
}
