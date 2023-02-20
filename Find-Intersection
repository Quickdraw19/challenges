function FindIntersection(strArr) {
  let array1 = strArr[0].trim().split(",");
  let array2 = strArr[1].trim().split(",");
  let retStr = '';

  for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
  console.log(array2.indexOf(array1[i]));
    if (array2.indexOf(array1[i] >= 0)) {
  console.log("PUSH");
      retStr += array1[i].trim();
      retStr += (i + 1 < array1.length) ? "," : "";
    }
  }

  return (retStr.length === 0) ? false : retStr; 
}
   
// keep this function call here 
console.log(FindIntersection(readline()));
