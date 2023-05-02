/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    if (s.length === 1) {
        console.log("NO");
    }
    
    let subjectNum = Number(s[0]);
    let doubleDig = false;
    let tripleDig = false;
    
    for (let i = 1; i < s.length; i++) {
        let test1 = Number(subjectNum) + 1;
        if (subjectNum === 9) {
            doubleDig = true;
        }

        if (subjectNum === 99) {
            tripleDig = true;
        }
        
        let test2 = doubleDig ? Number(s[i] + s[i + 1]) : Number(s[i]);
        let test3 = tripleDig ? Number(s[i] + s[i + 2]) : Number(s[i]);

        if ((Number(subjectNum) + 1 === doubleDig ? Number(s[i] + s[i + 1]) : Number(s[i])) || tripleDig ? Number(s[i] + s[i + 2]) : Number(s[i])) {
            subjectNum = Number(s[i]);
        } else {
            console.log("NO");
            return;
        }

        if (doubleDig) {
            i++;
        }
    }
    
    console.log("YES " + s[0]);
}

//separateNumbers('1234'); //YES 1-GOOD 
//separateNumbers('91011'); //YES 9 - GOOD
separateNumbers('99100'); //YES 99 - NO 
//separateNumbers('101103'); //NO
//separateNumbers('010203'); //NO
//separateNumbers('13'); //NO - YES 1
//separateNumbers('1'); //NO - Outputting NO and YES1
