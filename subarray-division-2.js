/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(segs, day, month) {
    let count = 0;
    
    if (segs.length > 1) {
        for (let i = 0; i < segs.length - 1; i++) {
            if (segs.slice(i, month + i).reduce((total, number) => total + number) === day) {
                count++;
            }
        }
    } else if (segs[0] === day) {
        count++;
    }
    
    return count;
}
