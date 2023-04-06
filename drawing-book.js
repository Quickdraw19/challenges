/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(length, page) {
    let currPage = 1;
    
    if (Math.ceil(length / 2) < page) {
        page = length - page;
    }
    
    if (currPage === 1) {
        while (currPage < page) {
            currPage += 2;
        }
    }
    
    return Math.floor(currPage / 2);
}
