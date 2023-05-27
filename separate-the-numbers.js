/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    if (s.length === 1) {
        console.log("NO");
    }

    let digits = getDigits(s);

    let currentNum = Number(s[0]); 
    
    for (let i = 0; i < s.length; i++) {
        // NEED TO DETECT OF STARTING NUMBER IS MORE THAN ONE DIGITS
        if (currentNum === 9) {
            digits++;
        }

        // The slice() method returns selected elements in an array, as a new array.
        // The slice() method selects from a given start, up to a (not inclusive) given end.
        let num1 = Number(s.slice(i, digits + i));
        let num2 = Number(s.slice(i + 1, digits + i + 1));

        if (num1 + 1 !== num2 && (num2 === 0 && num1 === s[i])) {
            //console.log("NO");
            return "NO";
        }

        currentNum++;
    }
    
    //console.log("YES " + s[0]);
    return "YES " + s[0];
}

// let test1 = (separateNumbers('1234') === "YES 1") ? "PASS" : "FAIL";
// console.log("Test 1: " + test1);

// let test2 = (separateNumbers('91011') === "YES 9") ?  "PASS" : "FAIL";
// console.log("Test 2: " + test2);

let test3 = (separateNumbers('99100') === "YES 99") ? "PASS" : "FAIL";
console.log("Test 3: " + test3);

// let test4 = (separateNumbers('101103') === "NO") ? "PASS" : "FAIL";
// console.log("Test 4: " + test4);

// let test5 = (separateNumbers('010203') === "NO") ? "PASS" : "FAIL";
// console.log("Test 5: " + test5);

// let test6 = (separateNumbers('13') === "NO") ? "PASS" : "FAIL";
// console.log("Test 6: " + test6);

// let test7 = (separateNumbers('1') === "NO") ? "PASS" : "FAIL";
// console.log("Test 7: " + test7);
