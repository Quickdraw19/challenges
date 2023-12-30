New Year Chaos
It is New Year's Day and people are in line for the Wonderland 
rollercoaster ride. Each person wears a sticker indicating their 
initial position in the queue from 1 to n. Any person can bribe the 
person directly in front of them to swap positions, but they still 
wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a 
given queue order. Print the number of bribes, or, if anyone has 
bribed more than two people, print Too chaotic.

Example:
q = [1,2,3,5,4,6,7,8]
If person 5 bribes person 4, the queue will look like this:
1,2,3,5,4,6,7,8. Only 1 bribe is required. Print "1".

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. 
Print "Too chaotic".

Function Description:
Complete the function minimumBribes in the editor below.
minimumBribes has the following parameter(s):
int q[n]: the positions of the people after all bribes

Returns:
No value is returned. Print the minimum number of bribes necessary 
or "Too chaotic" if someone has bribed more than 2 people.

Input Format:
The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in 
the queue
- The second line has n space-separated integers describing the 
final state of the queue.

Sample Input:
STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]

Sample Output:
3
Too chaotic
*/

const challenge = (q) => {
  const size = q.length
  let tally = 0

  for (let i = size; i > 0; i--) {
    if (Number(q[i-1]) === i) {
      continue
    } else {
      if (Number(q[i-2]) === i) {
        tally += 1
        // Put number back in order
        q[i-2] = q[i-1]
        q[i-1] = q[i]
      } else if (Number(q[i-3]) === i) {
        tally += 2
        // Put number back in order
        q[i-3] = q[i-2]
        q[i-2] = q[i-1]
        q[i-1] = q[i]
      } else {
        //console.log("Too Chaotic")
        return "Too chaotic"
      }
    }
  }

//console.log(tally)
  return tally
}

// TEST DATA [{arguments}: {expected result}]
const testCases = {
  1: {
    d: [1,2,3,5,4,6,7,8],
    e: 1
  },
  2: {
    d: [4,1,2,3],
    e: "Too chaotic"
  },
  3: {
    d: [2,1,5,3,4],
    e: 3
  },
  4: {
    d: [2,5,1,3,4],
    e: "Too chaotic"
  },
  5: {
    d: [1, 2, 5, 3, 4, 7, 8, 6],
    e: 4
  },
  6: {
    d: [5, 1, 2, 3, 7, 8, 6, 4],
    e: "Too chaotic"
  },
  7: {
    d: [1, 2, 5, 3, 7, 8, 6, 4],
    e: 7
  }
}
  

// TEST CODE
for (const testNumber in testCases) {
  //if (testCases.hasOwnProperty(testData)) {
    const testSet = testCases[testNumber]
    const testData = testSet.d
    const expected = testSet.e
    const result = challenge(testData)
    console.log(`Test '${testNumber}': `, (result === expected) ? "PASS" : "FAIL")
  //}
}
