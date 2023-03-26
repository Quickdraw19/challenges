/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let sortArray = [];
    // Initialze
    for (let i = 0; i < 100; i++) {
        sortArray[i] = 0;
    }
    
    for (let i = 0; i < arr.length; i++) {
        // Use the `arr` element value as the key value of `sortArray` and increment the value of that key.
        sortArray[arr[i]]++;
    }
    
    return sortArray;
}
