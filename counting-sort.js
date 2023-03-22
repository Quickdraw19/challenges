/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let sortArr = initArray();

    for (let i = 0; i < arr.length; i++) {
        sortArr[arr[i]]++;
    }

    return sortArr;
}
