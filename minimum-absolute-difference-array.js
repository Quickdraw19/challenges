// Minimum Absolute Difference in an Array
// minimumAbsoluteDifference(arr)
// TWO TEST CASES TAKING TOO LONG AND NOT GIVING THE ARRAY PASSED IN. NEED TO OPTIMIZE.
function myfunction(arr) {
    let minDiff = -1;
    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (i === j) continue;

            let comp = Math.abs(arr[i] - arr[j]);
            if (comp < minDiff || minDiff === -1) {
                minDiff = comp;
            }
        }
    }

    return minDiff;
}

let funcResult = myfunction([-2, 2, 4]);
let expectedResult = 2;
let test1 = (funcResult === expectedResult) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);
