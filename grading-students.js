/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let rGrades = [];

    for (let i = 0; i < grades.length; i++) {
        let stepUp = Math.ceil(grades[i]/10) * 10;
        
        if (grades[i] > 40 && stepUp - grades[i] < 3) {
            rGrades[i] = stepUp;
        } else {
            rGrades[i] = grades[i];
        }
    }
    
    return rGrades;
}
