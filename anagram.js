/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    const len = s.length;

    if (len % 2 > 0) {
        return -1;
    }
    
    let s1 = s.slice(0, len / 2);
    let s2 = s.slice(len / 2);
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
let test = s1[i];
        if (s2.indexOf(s1[i]) === -1) {
            count++
        } else {
            s2 = s2.replace(s1[i], '');
        }
    }
    
    return count;
}

let test1 = (anagram('aaabbb') === 3) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);

let test2 = (anagram('ab') === 1) ?  "PASS" : "FAIL";
console.log("Test 2: " + test2);

let test3 = (anagram('abc') === -1) ? "PASS" : "FAIL";
console.log("Test 3: " + test3);

let test4 = (anagram('mnop') === 2) ? "PASS" : "FAIL";
console.log("Test 4: " + test4);

let test5 = (anagram('xyyx') === 0) ? "PASS" : "FAIL";
console.log("Test 5: " + test5);

let test6 = (anagram('xaxbbbxx') === 1) ? "PASS" : "FAIL";
console.log("Test 6: " + test6);

let test7 = (anagram('asdfjoieufoa') === 3) ? "PASS" : "FAIL";
console.log("Test 7: " + test7);

let test8 = (anagram('fdhlvosfpafhalll') === 5) ? "PASS" : "FAIL";
console.log("Test 8: " + test8);


let test9 = (anagram('mvdalvkiopaufl') === 5) ? "PASS" : "FAIL";
console.log("Test 9: " + test9);
