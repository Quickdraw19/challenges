/*
TRUCK TOUR
Suppose there is a circle. There are N petrol pumps on that circle. 
Petrol pumps are numbered 0 to (N-1) (both inclusive). You have two 
pieces of information corresponding to each of the petrol pump: 
(1) the amount of petrol that particular petrol pump will give, and 
(2) the distance from that petrol pump to the next petrol pump. 
Initially, you have a tank of infinite capacity carrying no petrol. 
You can start the tour at any of the petrol pumps. Calculate the first 
point from where the truck will be able to complete the circle. 
Consider that the truck will stop at each of the petrol pumps. 
The truck will move one kilometer for each litre of the petrol.

Input Format:
The first line will contain the value of N.
The next N lines will contain a pair of integers each, i.e. the amount 
of petrol that petrol pump will give and the distance between that 
petrol pump and the next petrol pump.

Output Foarmt:
An integer which will be the smallest index of the petrol pump from 
which we can start the tour.

Sample Input:
3
1 5
10 3
3 4

Sample Output:
1

Explaination:
We can start the tour from the second petrol pump.
*/

const challenge = (q) => {

}

// TEST DATA {d: [arguments]: e: [expected result]}
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
