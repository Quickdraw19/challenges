/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let barLen = s.length;
    let count = 0;
    
    for (let i = 0; i <= barLen-m; i++) {
        let seg = s.slice(i, i + m);
        
        let sum = seg.reduce((t, n) => t + n, 0);
        if (sum == d) {
            count++;
        }
    }
    
    return count;
}
