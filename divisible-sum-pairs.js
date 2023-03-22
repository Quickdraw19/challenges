/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(digits, divisor, nums) {
    let count = 0;

    for (let i = 0; i < digits; i++) {
        for (let j = i+1; j < digits; j++) {
            let sum = nums[i] + nums[j];
            if (sum % divisor === 0) {
                count++;
            }
        }
    }
    
    return count;
}
