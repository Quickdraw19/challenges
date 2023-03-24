/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(number) {
    // Convert the default base10 number to the base2 version.
    let binNum = number.toString(2);
    
    // For this application, the number needs to be 32 digits so add leading 0s.
    binNum = binNum.padStart(32,'0');
    
    let binNumFlipped = [];
    
    // Iterate through each of the 32 digits
    for (let i = 0; i < 32; i++) {
        // If the digit is 1, then change it to 0.
        if (binNum[i]) {
            //binNumFlipped[i] = binNum[i] ^ 1;
            binNumFlipped[i] = 0;
        } else { // Change it to 1.
            binNumFlippped[i] = 1;
        }
    }
    
    // Convert the array of bits into a string
    binNumFlippped = binNumFlippped.join("");
    
    // Convert the base2 version of the number back into base10 respresentation.
    return parseInt(nFlipBin, 2);
}
