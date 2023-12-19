/*
ONE WEEK, DAY 4 TEST
Given a square grid of characters in the range ascii[a-z], rearrange 
elements of each row alphabetically, ascending. Determine if the 
columns are also in ascending alphabetical order, top to bottom. 
Return YES if they are or NO if they are not.

Example:
grid = ['abc','ade','efg']
The grid is illustrated below.
a b c
a d e
e f g
The rows are already in alphabetical order. The columns a a e, b d f 
and c e g are also in alphabetical order, so the answer would be YES. 
Only elements within the same row can be rearranged. They cannot be 
moved to a different row.

Function Description
Complete the gridChallenge function in the editor below.
gridChallenge has the following parameter(s):
* string grid[n]: an array of strings

Returns
* string: either YES or NO

Input Format
The first line contains , the number of testcases.
Each of the next  sets of lines are described as follows:
- The first line contains , the number of rows and columns in the grid.
- The next  lines contains a string of length 

Constraints
Each string consists of lowercase letters in the range ascii[a-z]

Output Format
For each test case, on a separate line print YES if it is possible 
to rearrange the grid alphabetically ascending in both its rows and 
columns, or NO otherwise.
Test cases pass in up to 20 strings.
The length of any given is between 1 and 10^5 + 5 (100,005)

Sample Input
STDIN   Function
-----   --------
1       t = 1
5       n = 5
ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
fghij
olmkn
trpqs
xywuv

Sample Output
YES

Explanation
The x grid in the  test case can be reordered to
abcde
fghij
klmno
pqrst
uvwxy
This fulfills the condition since the rows 1, 2, ..., 5 
and the columns 1, 2, ..., 5 are all alphabetically sorted.
*/

const challenge = (s) => {

}

// TEST DATA [{arguments}: {expected result}]
const testCases = {

}

// TEST CODE
let counter = 0
for (const testData in testCases) {
  if (testCases.hasOwnProperty(testData)) {
    const expected = testCases[testData]
    // console.log(`Test '${testData}': `, (challenge(testData) === expected) ? "PASS" : "FAIL")
    const result = challenge(testData)
    console.log(`Test '${counter++}': `, (result === expected) ? "PASS" : "FAIL")
    // console.log(`Test '${counter++}': `, (result === expected) ? "PASS" : "FAIL", ` -- expected ${expected}, returned ${result}`)
    //console.log(expected)
  }
}
