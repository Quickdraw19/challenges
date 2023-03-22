function CodelandUsernameValidation(str) { 
  // Check length between 4 and 25
  if (str.length < 4 || str.length > 25) {
    return false;
  }

  // Check that first char is letter
  if (str[0].match(/[a-z]/i) == null) {
      return false;
  }

  // Check if last char is underscore
  if (str[str.length] === "_") {
    return false;
  }

  // Check if str contains anything other than letters, numbers, or underscores
  if (str.match(/^[a-z][A-Z][0-9]_/)) {
    return false;
  }

  return true; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
