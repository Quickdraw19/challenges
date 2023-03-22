/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    s = s.toLowerCase();
    
    for (let i = 0; i < alphabet.length; i++) {
        if (s.indexOf(alphabet[i]) === -1) {
            return "not pangram";
        }
    }

    return "pangram"
}
