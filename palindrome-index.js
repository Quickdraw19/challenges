/*
* Complete the 'palindromeIndex' function below.
*
* The function is expected to return an INTEGER.
* The function accepts STRING s as parameter.
*/
function palindromeIndex(s) {
  // Check if the string is already a palindrome
  if (s === s.split('').reverse().join('')) {
    return -1;
  }
  
  // Remove each letter sequencially until the string without that letter makes a palindrome, if possible
  for (let i = 0; i < s.length; i++) {
    // Remove the letter at the given index
    let modStr = s.slice(0, i) + s.slice(i + 1, s.length);
    
    // Check if the new string equals the reversed version of ittself
    if (modStr === modStr.split('').reverse().join('')) {
      return i;
    }
  }
  
  return - 1;
}
