/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(length, page) {//10, 9
    let currPage = 1;
    
    if (page > Math.floor(length / 2)) {
        page = length - page + ((length + 1) % 2);
    }
    
    if (currPage === 1) {
        while (currPage < page) {
            currPage += 2;
        }
    }
    
    return Math.floor(currPage / 2);
}
