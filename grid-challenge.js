/*
Given a square grid of characters in the range ascii[a-z], rearrange 
elements of each row alphabetically, ascending. Determine if the columns 
are also in ascending alphabetical order, top to bottom. Return YES if 
they are or NO if they are not.

Example:
The grid is illustrated below.
a b c
a d e
e f g
The rows are already in alphabetical order. The columns a a e, b d f and c e g 
are also in alphabetical order, so the answer would be YES. Only elements 
within the same row can be rearranged. They cannot be moved to a different row.

gridChallenge() has the following parameter(s):
  string grid[n]: an array of strings
Returns
  string: either YES or NO
Input
  Each of the next  sets of lines are described as follows:
  - The first line contains , the number of rows and columns in the grid.
  - The next  lines contains a string of length 

Constraints
  Each string consists of lowercase letters in the range ascii[a-z]

Output Format
  For each test case, on a separate line print YES if it is possible to rearrange 
  the grid alphabetically ascending in both its rows and columns, or NO otherwise.
*/

function gridChallenge(grid) {

}

let test1 = (gridChallenge['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']) === "YES") ? "PASS" : "FAIL";
console.log("Test 1: " + test1);

let test2 = (gridChallenge['abc', 'lmp', 'qrt']) === "YES") ? "PASS" : "FAIL";
console.log("Test 2: " + test2);

let test3 = (gridChallenge['mpxz', 'abcd', 'wlmf']) === "NO") ? "PASS" : "FAIL";
console.log("Test 3: " + test3);

let test4= (gridChallenge['abc', 'hjk', 'mpq', 'rtv']) === "YES") ? "PASS" : "FAIL";
console.log("Test 4: " + test4);

//let test5 = (gridChallenge[]) === "YES") ? "PASS" : "FAIL";
//console.log("Test 1: " + test1);
