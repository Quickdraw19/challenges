/*
ONE WEEK, DAY 3 TEST
I strugged with this one for a while. It wasn't very efficient. I was too stubborn to use a help function.

Given a string of lowercase letters in the range ascii[a-z], determine the index of a 
character that can be removed to make the string a palindrome. There may be more than one 
solution, but any will do. If the word is already a palindrome or there is no solution, 
return -1. Otherwide, return the index of a character to remove.
*/

function checkPalindrome(str) {
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
      if (str[i] !== str[str.length - i - 1]) {
          return false;
      }
  }

  return true;
}

const challenge = (s) => {

}

const palindromeIndex = (s) => {
  const sLength = s.length;
  
  let beg = 0;
  let end = sLength - 1;
  let match = true;
  
  while (beg < end) {
      if (s[beg] !== s[end]) {
        match = false;
        break;
      }

      beg++;
      end--;
  }
  
  // The string is a valid palindrome without changes
  if (match) {
      return -1;
  }
  
  // See if removing the first letter makes 's' a palindrome
  if (checkPalindrome(s.slice(0, beg) + s.slice(beg + 1))) {
      return beg;
  }
  
  // See if removing the last letter makes 's' a palindrome
  if (checkPalindrome(s.slice(0, end) + s.slice(end + 1))) {
      return end;
  }
  
  // If nothing above passes, it must not be possible to make 's' into a palindrome
  return -1;
  }

// TEST DATA [{arguments}: {expected result}]
const testCases = {
  "aaab": 3,
  "baa": 0,
  "aaaa": -1,
  "msdfsdfrlkjklsnop": -1,
  "quyjjdcgsvvsgcdjjyq": 1,
  "hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh": 8,
  "fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf": 33,
  "bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb": 23,
  "fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf": 25,
  "mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm": 44,
  "tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt": 20,
  "lhrxvssvxrhl": -1,
  "prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp": 14,
  "kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk": -1,
}

// TEST CODE
let counter = 0
for (const testData in testCases) {
  if (testCases.hasOwnProperty(testData)) {
    const expected = testCases[testData]
    // console.log(`Test '${testData}': `, (challenge(testData) === expected) ? "PASS" : "FAIL")
    const result = challenge(testData)
    console.log(`Test '${counter++}': `, (result === expected) ? "PASS" : "FAIL")
    // console.log(`Test '${counter++}': `, (result === expected) ? "PASS" : "FAIL", ` -- expected ${expected}, returned ${result}`)
    //console.log(expected)
  }
}
