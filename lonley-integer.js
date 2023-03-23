/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function lonelyinteger(arr) {
    let loner, seg;
    arr.sort((a,b) => a - b); // Sort numerically
    
    for (let i = 0; i <= arr.length; i = i + 2) {
        // Get a segment of the array two digits at a time
        seg = arr.slice(i, i + 2);

        // If both numbers in the segment are equal, move to the next set
        if (seg[0] == seg[1]) {
            continue;
        } else {
            // If both numbers in the segment don't match, then the first number must be breaking the pattern.
            loner = seg[0];
            break;
        }
    }
    
    return loner;
}
