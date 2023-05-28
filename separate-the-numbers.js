/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    let len = Math.floor(s.length / 2); // Only look at half the digits because that's the minimum needed for the next number to be sequenctial

    for (let i = 1; i <= len; i++) {
        const firstNum = s.slice(0, i); // Get the first number in the string. Starts with one digit in the first iteration, two digits the next, and so on...
        let currentNum = BigInt(firstNum);
        let compStr = '';

        // Attempt to rebuild the passed in string
        while (compStr.length < s.length) {
            compStr += currentNum++;
        }

        // If the strings match, then it is "beautiful", else repeat the loop to check if the first number is multiple digits
        if (compStr === s) {
            //return "YES " + firstNum;
            console.log("YES" + firstNum);
            return;
        }
    }

    // If the FOR loop ends without find a "beautiful" match, then it must be ugly
    //return "NO";
    console.log("NO");
}

let test1 = (separateNumbers('1234') === "YES 1") ? "PASS" : "FAIL";
console.log("Test 1: " + test1);

let test2 = (separateNumbers('91011') === "YES 9") ?  "PASS" : "FAIL";
console.log("Test 2: " + test2);

let test3 = (separateNumbers('99100') === "YES 99") ? "PASS" : "FAIL";
console.log("Test 3: " + test3);

let test4 = (separateNumbers('101103') === "NO") ? "PASS" : "FAIL";
console.log("Test 4: " + test4);

let test5 = (separateNumbers('010203') === "NO") ? "PASS" : "FAIL";
console.log("Test 5: " + test5);

let test6 = (separateNumbers('13') === "NO") ? "PASS" : "FAIL";
console.log("Test 6: " + test6);

let test7 = (separateNumbers('1') === "NO") ? "PASS" : "FAIL";
console.log("Test 7: " + test7);
