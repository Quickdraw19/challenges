/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(msg) {
    let errors = 0;
    let msgSegments = msg.match(/.{1,3}/g);
    
    // I didn't optimise this
    msgSegments.forEach((seg) => {
        if (seg[0] !== "S") {
            errors++
        }
        if (seg[1] !== "O") {
            errors++
        }
        if (seg[2] !== "S") {
            errors++
        }
    });
    
    return errors;
}
