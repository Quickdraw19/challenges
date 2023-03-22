/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    let nBin = n.toString(2);
    nBin = nBin.padStart(32,'0')
    let nFlipBin = [];
    
    for (let i = 0; i < 32; i++) {
        if (nBin[i]) {
            nFlipBin[i] = nBin[i] ^ 1;
        } else {
            nFlipBin[i] = 1;
        }
    }

    nFlipBin = nFlipBin.join("");
    return parseInt(nFlipBin, 2);
}
