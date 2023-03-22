<?php

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus($arr) {
    // Get the total number of values.
    $totalValues = count($arr);
    // Get the number of positive, negative, and zero values (total of three groups).
    $positive = 0;
    $negative = 0;
    $zero = 0;
    foreach ($arr as $value) {
        if ($value > 0) {
            $positive++;
            continue;
        }
        if ($value < 0) {
            $negative++;
            continue;
        }
        if ($value === 0) {
            $zero++;
            continue;
        }
    }
    // Get the ratio of each group.
    $output = [
        'positive' => $positive/$totalValues,
        'negative' => $negative/$totalValues,
        'zero' => $zero/$totalValues
    ];
    // Print each ratio value on seperate lines, each value displayihg six decimal places
    printf("%f\n", $output['positive']);
    printf("%f\n", $output['negative']);
    printf("%f\n", $output['zero']);
}

$n = intval(trim(fgets(STDIN)));

$arr_temp = rtrim(fgets(STDIN));

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

plusMinus($arr);
