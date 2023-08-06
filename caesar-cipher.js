/* Complete the 'caesarCipher' function below:
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k */

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    while (k - 26 > 0) {
        k -= 26;
    }

    let shiftLett = alphabet.substring(0, k); // Take out the letters I want to shift.
    let alphaShift = alphabet.substring(k); // Get the alphabet without the shifted letters.
    let encryptabet = alphaShift.concat(shiftLett); // Add the shifted letters to the end of the alphabet.
    let encrypted = '';

    // Map 's' to encrytabet
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() !== s[i].toLowerCase()) {
            
            let isUpper = (s[i] === s[i].toUpperCase()) ? true : false;
            // Get alphabet position of letter s[i]
            let alphpos = alphabet.indexOf(s[i].toLowerCase());
            encrypted += (isUpper) ? encryptabet[alphpos].toUpperCase() : encryptabet[alphpos];
        } else {
            encrypted += s[i];
        }
    }

    return encrypted;
}
