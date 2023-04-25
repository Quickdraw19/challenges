<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <script>
            /*
            * Complete the 'getTotalX' function below.
            *
            * The function is expected to return an INTEGER.
            * The function accepts following parameters:
            *  1. INTEGER_ARRAY a
            *  2. INTEGER_ARRAY b
            * 
            * Satisfy two conditions:
            * 1. The elements of the first array are all factors of the integer being considered
            * 2. The integer being considered is a factor of all elements of the second array
            */

            function getTotalX(a, b) {
                let subjectInts1 = [];
                let maxA = Math.max(...a);
                let maxB = Math.max(...b);
                let counter = maxA;
                let compare = [];

                // Fill subject ints
                while (counter <= maxB / 2) {
                    subjectInts1.push(counter);
                    counter++
                }
                
                // Nothing between maxB and maxB/2 will be a factor except maxB itself
                subjectInts1.push(maxB);

                // Eliminate possible factors of 'a' values
                let subjectInts2 = [];
                
                for (let j = 0; j < subjectInts1.length; j++) {
                    compare = [];
                    for (let i = 0; i < b.length; i++) {
                        compare[i] = b[i] % subjectInts1[j] > 0;
                    }

                    let keep = true;
                    for (let x = 0; x < compare.length; x++) {
                        if (compare[x]) {
                            keep = false;
                        }
                    }

                    if (keep) {
                        subjectInts2.push(subjectInts1[j]);
                    }
                }

                subjectInts2 = subjectInts2.filter((val, idx, arr) => arr.indexOf(val) === idx);

                // Eliminate numbers in which that are not factors of 'a' values
                let subjectInts3 = [];

                for (let j = 0; j < subjectInts2.length; j++) {
                    compare = []
                    for (let i = 0; i < a.length; i++) {
                        compare[i] = subjectInts2[j] % a[i] > 0;
                    }

                    let keep = true;
                    for (let x = 0; x < compare.length; x++) {
                        if (compare[x]) {
                            keep = false;
                        }
                    }

                    if (keep) {
                        subjectInts3.push(subjectInts2[j]);
                    }
                }

                let results = subjectInts3.filter((val, idx, arr) => arr.indexOf(val) === idx);
                return results.length;
            }

            window.onload = function () {
                let results = [], a, b;
                a = [2, 4];
                b = [16, 32, 96];
                results[0] = getTotalX(a, b) === 3;
                // Expected result: 3
                // Posible subject ints: 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96
                // Keep only subject ints that are a factor of the ints in `b`: 4,8,16
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 4,8,16

                
                a = [3, 4];
                b = [24, 48];
                results[1] = getTotalX(a, b) === 2;
                // Expected result: 2
                // Posible subject ints: 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48
                // Keep only subject ints that are a factor of the ints in `b`: 4,6,8,12,24
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 12,24


                a = [2];
                b = [20, 30, 12];
                results[2] = getTotalX(a, b) === 1;
                // Expected result: 1
                // Posible subject ints: 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
                // Keep only subject ints that are a factor of the ints in `b`: 2
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 2


                a = [3, 9, 6];
                b = [36, 72];
                results[3] = getTotalX(a, b) === 2;
                // Expected result: 2
                // Posible subject ints: 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72
                // Keep only subject ints that are a factor of the ints in `b`: 9,12,18,36
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 18,36


                a = [1];
                b = [100];
                results[4] = getTotalX(a, b) === 9;
                // Expected result: 9
                // Posible subject ints: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
                // Keep only subject ints that are a factor of the ints in `b`: 1,2,4,5,10,20,25,50,100
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 1,2,4,5,10,20,25,50,100


                a = [1];
                b = [72, 48];
                results[5] = getTotalX(a, b) === 8;
                // Expected result: 8
                // Posible subject ints: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72
                // Keep only subject ints that are a factor of the ints in `b`: 1,2,3,4,6,8,12,24
                // Keep only remaining subject ints int which the ints in `a` are factors OF: 1,2,3,4,6,8,12,24
                
                var result = "";
                results.forEach(a => result += "<p>Pass: " + JSON.stringify(a) + "</p>");
                document.getElementById('container').innerHTML = result;
            }
        </script>
        <p>The number of integers between the arrays is:</p>
        <div id="container"></div>

        <div>
            <h1>Instructions</h1>
            <p>
                There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
                <ol>
                    <li>The elements of the first array are all factors of the integer being considered</li>
                    <li>The integer being considered is a factor of all elements of the second array</li>
                </ol>
            </p>
            <p>
                These numbers are referred to as being <i>between</i> two arrays. Determine how many such numbers exist.
            </p>
        <h2>Example</h2>
        <code>a = [2,6]</code><br>
        <code>b = [24,36]</code>

        <p>There are two numbers between the arrays: 6 and 12.</p>
        6 % 2 = 0<br>
        6 % 6 = 0<br>
        24 % 6 = 0 and<br>
        36 % 6 = 0 for the first value.<br><br>
        12 % 2 = 0<br>
        12 % 6 = 0<br>
        and<br>
        24 % 12 = 0<br>
        36 % 12 = 0 for the second value.<br>
        Return 2.

        <h2>Function Description</h2>

        <p></p>Complete the <i>getTotalX</i> function. It should return the number of integers that are between the sets.
        getTotalX has the following parameters:</p>
        <ul>
            <li><i>int a[n]</i>: an array of integers</li>
            <li><i>int b[m]</i>: an array of integers</li>
        </ul>

        <h3>Returns</h3>
        <ul>
            <li><i>int</i>: the number of integers that are between the sets</li>
        </ul>

        <h3>Sample Input</h3>
        <code>a = [2,4]</code><br>
        <code>b = [16,32,96]</code>

        <h3>Sample Output</h3>
        <code>3</code>

        <h3>Explaination</h3>
        <p>2 and 4 divide evenly into 4, 8, 12, and 16.</p>
        <p>4, 8, and 16 divide evenly into 16, 32, and 96.</p>
        <p>4, 8, and 16 are the only three numbers for which each element of <i>a</i> is a factor and each is a factor of all elements of <i>b</i>.</p>
    </body>
</html>
