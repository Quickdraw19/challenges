/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    let winner = 0;
    
    // If towers are only 1 high: Player 2 always wins
    // If odd number of towers, Player 1 always wins
    // If even number of towers, Player 2 always wins
    if (m === 1) {
        return 2;
    }
    
    winner = (n % 2 === 0) ? 2 : 1;
    
    return winner;
}
