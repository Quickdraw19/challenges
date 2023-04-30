/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    if (s.length === 1) {
        console.log("NO");
    }
    
    let subjectNum = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (subjectNum + 1 == s[i]) {
            subjectNum = s[i];
        } else {
            return "NO";
        }
    }
    
    console.log("YES " + s[0]);
}
