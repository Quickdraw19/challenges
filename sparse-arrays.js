/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    let results = [];
    
    for (let q = 0; q < queries.length; q++) {
        results[q] = 0
        for (let n = 0; n < strings.length; n++) {
            if (queries[q] == strings[n]) {
                results[q] += 1;
            }
        }
    }
    
    return results;
}
