// Minimum Absolute Difference in an Array
// minimumAbsoluteDifference(arr)
function myfunction(arr) {
    let minDiff = Number.POSITIVE_INFINITY;
    arr.sort((a,b) => a-b);

    for (let i = 0; i < arr.length; i++) {
        let comp = Math.abs(arr[i] - arr[i + 1]);

        if (comp < minDiff) {
            minDiff = comp;
        }
    }

    return minDiff;
}

let funcResult = myfunction([-2, 2, 4]);
let expectedResult = 2;
let test1 = (funcResult === expectedResult) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);
