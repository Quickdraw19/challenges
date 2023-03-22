function LongestWord(sen) {
  let longest = "";

  // Split the string into an array
  let wordArray = sen.split(" ");

  wordArray.forEach(function(val, index) {
    // Filter out non-alphanumeric characters
    val = val.replace(/[^A-Za-z0-9]/gi, '');
    
    if (val.length > longest.length) {
      longest = val;
    }
  });

  return longest;
}
   
// keep this function call here 
console.log(LongestWord(readline()));
