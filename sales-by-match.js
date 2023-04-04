/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, socks) {
    let pairs = {};

    for (let i = 0; i < n; i++) {
        if (pairs[socks[i]]) {
            pairs[socks[i]]++;
        } else {
            pairs[socks[i]] = 1;
        }
    }
    console.log(pairs)//{ '10': 4, '20': 3, '30': 1, '50': 1 }
    let matches = 0;
    for (const [key, value] of Object.entries(pairs)) {
        matches += Math.floor(value / 2);
    }
    
    return matches;
}
