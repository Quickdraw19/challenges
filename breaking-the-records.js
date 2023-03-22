/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let highscore, lowscore, high, low;
    highscore = lowscore = scores[0];
    high = low = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highscore) {
            highscore = scores[i];
            high++;
        } else if (scores[i] < lowscore) {
            lowscore = scores[i];
            low++
        }
    }
    
    return [high, low];
}
