/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    let kang1Pos = x1;
    let kang2Pos = x2;
    
    for (let i = 0; i <= 10000; i++) {
        kang1Pos += v1;
        kang2Pos += v2;
        
        if (kang1Pos === kang2Pos) {
            return "YES";
        }
    }
    
    return "NO";
}
