function pickingNumbers(a) {
    a = a.sort((a,b) => a-b);
    let subArray = [];
    let currentNum = a[0];
    let highCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === currentNum || a[i] + 1 === currentNum || a[i] - 1 === currentNum) {
            subArray.push(a[i]);
        } else {
            highCount = subArray.length > highCount ? subArray.length : highCount;
            subArray = [];
            currentNum = a[i];
            subArray.push(a[i]);
        }
    }

    highCount = subArray.length > highCount ? subArray.length : highCount;
    
    return highCount;
}

let result = pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);

console.log(result === 5 ? 'PASS' : 'FAIL')
