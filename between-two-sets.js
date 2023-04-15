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
                let subjectInt = Math.min(...a);
                let maxA = Math.max(...a);
                let maxB = Math.max(...b) / maxA;
                let counter = subjectInt;

                // Fill subject ints
                while (counter <= maxB) {
                    subjectInts1.push(counter);
                    counter += 2;
                }

                let subjectInts2 = [];

                for (let i = 0; i < subjectInts1.length; i++) {
                    if (subjectInts1[i] % maxA === 0) {
                        subjectInts2.push(subjectInts1[i]);
                    }
                }

                let subjectInts3 = [];
                
                for (let j = 0; j < subjectInts2.length; j++) {
                    for (let i = 0; i < b.length; i++) {
                        if (b[i] % subjectInts2[j] > 0) {
                            break;
                        }

                        subjectInts3.push(subjectInts2[j]);
                    }
                }

                let results = subjectInts3.filter((val, idx, arr) => arr.indexOf(val) === idx);
                return results.length;
            }
