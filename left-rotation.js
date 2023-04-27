function challenge(d, arr) {
    let leftNums = arr.slice(0, d);
    let rightNums = arr.slice(d);
    let shiftedArr = rightNums.concat(leftNums);

    return shiftedArr;
}

let result = challenge(4, [1, 2, 3, 4, 5]);
