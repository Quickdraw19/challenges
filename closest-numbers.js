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
        } else {
            minDiff = diff;
        }

        returnArr.push(sortedArr[i]);
        returnArr.push(sortedArr[i+1]);
    }
    
    return returnArr;
}

console.log(myfunction([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]))
let test1 = (myfunction([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]) === [-20, 30]) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);
