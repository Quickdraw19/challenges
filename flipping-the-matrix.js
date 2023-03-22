/*
* Complete the 'flippingMatrix' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix) {
  let mlen = matrix.length;
  
  // Size of the matrix
  let qlen = mlen / 2;
  
  // Size of the quadrant
  let total = 0;
  
  for (let row = 0; row < qlen; row++) {
    for(let col = 0; col < qlen; col++) {
      let hiVal = 0;
      
      // Reset the highest value on each iteration
      // Get the value of the current location
      hiVal = matrix[row][col];
      
      // See if the opposite number in the column is a higher value
      hiVal = Math.max(matrix[row][mlen - col - 1], hiVal);
      
      // See if the oppostite number in the row is a higher value
      hiVal = Math.max(matrix[mlen - row - 1][col], hiVal);
      
      // See if the opposite diagonal number is a higher value
      hiVal = Math.max(matrix[mlen - row - 1][mlen - col - 1], hiVal);
      
      // Add the highest value to the total
      total += hiVal;
    }
  }
  
  return total;
}
