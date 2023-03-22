/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let retArr = [];
    // Initialize retArr
    for (let i = 0; i < 100; i++) {
        retArr[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        retArr[arr[i]]++;
    }
    
    return retArr;
}
