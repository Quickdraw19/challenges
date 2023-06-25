// closestNumbers()
function myfunction(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    let minDiff;
    let returnArr = [];
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        let diff = Math.abs(sortedArr[i] - sortedArr[i + 1]);
        
        if (i === 0) {
            minDiff = diff;
        }
        
        if (diff < minDiff) {
            returnArr = [];
            minDiff = diff;
        }

        if (diff === minDiff) {
            returnArr.push(sortedArr[i]);
            returnArr.push(sortedArr[i+1]);
        }
    }
    
    return returnArr;
}

let funcResult = myfunction([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]);
let expectedResult = [-20, 30];
let test1 = (JSON.stringify(funcResult) === JSON.stringify(expectedResult)) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);

funcResult = myfunction([-5, 15, 25, 71, 63]);
expectedResult = [63, 71];
let test2 = (JSON.stringify(funcResult) === JSON.stringify(expectedResult)) ? "PASS" : "FAIL";
console.log("Test 2: " + test2);
