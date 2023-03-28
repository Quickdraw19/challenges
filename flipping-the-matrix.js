/*
* Complete the 'flippingMatrix' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix) {
  let matrixSize = matrix.length;
  let quadrantSize = matrixSize / 2;
  let total = 0;
  
  for (let row = 0; row < quadrantSize; row++) {
    for(let col = 0; col < quadrantSize; col++) {
      let highestTotal = 0;
      let oppCol = (matrixSize - col) - 1;
      let oppRow = (matrixSize - row) - 1;
      
      highestTotal = Math.max(
        matrix[row][col],
        matrix[row][oppCol],
        matrix[oppRow][col],
        matrix[oppRow][oppRow],
        highestTotal;
       );
      
      total += highestTotal;
    }
  }
  
  return total;
}
