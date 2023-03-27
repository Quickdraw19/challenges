/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(str) {
        let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    // Requires state to ignore case
    str = str.toLowerCase();
    
    // Go through each letter of the alphabet and see if the given exists in the input string. If not, break out because that disqualifies the string as a pangram
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            return "not pangram";
        }
    }

    // At this point, the input string passes as a pangram
    return "pangram"
}

