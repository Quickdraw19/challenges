/*
ONE WEEK, DAY 3 TEST

Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be 
removed to make the string a palindrome. There may be more than one solution, but any will do. If the word 
is already a palindrome or there is no solution, return -1. Otherwide, return the index of a character to remove.
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

let test1 = (palindromeIndex("aaab") === 3) ? "PASS" : "FAIL";
console.log("Test 1: " + test1);

let test2 = (palindromeIndex("baa") === 0) ?  "PASS" : "FAIL";
console.log("Test 2: " + test2);

let test3 = (palindromeIndex('aaaa') === -1) ? "PASS" : "FAIL";
console.log("Test 3: " + test3);

let test4 = (palindromeIndex('msdfsdfrlkjklsnop') === -1) ? "PASS" : "FAIL";
console.log("Test 4: " + test4);
