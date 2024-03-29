/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Convert path string into an array
    let pathArray = path.split('');
    let valleys = 0, level = 0;
    
    for (let step = 0; step < pathArray.length; step++) {
        let direction = pathArray[step];
        
        if (direction === "D") {
            if (level === 0) {
                valleys++;
            }
            
            level -= 1;
            
        } else { // Logical direction must be "U"
            level += 1;
        }
    }
    
    return valleys;
}
