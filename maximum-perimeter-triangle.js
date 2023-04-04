/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    // For three lines to make a triangle, the sum of the two 
    // shorter lengths must be greater than the 3rd length.
    sticks.sort((a,b) => a-b);
    let len = sticks.length - 2;
    let validSticks = [];
    let winner = [];
    let largest = 0;

    for (let i = 0; i < len; i++) {
        if (sticks[i] + sticks[i+1] > sticks[i+2]) {
            validSticks.push({
                'sticks': [sticks[i], sticks[i+1], sticks[i+2]],
                'total': sticks[i] + sticks[i+1] + sticks[i+2]
            });
        }
    }

    if (validSticks.length) {
        for (let i = 0; i < validSticks.length; i++) {
            if (validSticks[i].total > largest) {
                largest = validSticks[i].total;
                winner = validSticks[i].sticks;
            }
        }
    } else {
        return [-1];
    }
    
    return winner;
}
