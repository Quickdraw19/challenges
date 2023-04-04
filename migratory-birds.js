/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(birds) {
    birds.sort((a,b) => a-b);
    let birdGroups = {};
    
    for (let i = 0; i < birds.length; i++) {
        if (birdGroups[birds[i]]) {
            birdGroups[birds[i]]++;
        } else {
            birdGroups[birds[i]] = 1;
        }
    }
    let mostest = 0;
    for (const [key, value] of Object.entries(birdGroups)) {
        mostest = (value > mostest) ? key : mostest;
    }
    
    return mostest;
}
