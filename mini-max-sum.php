<?php

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum($arr) {
    $arrTotal = array_sum($arr);
    $minTotal = $arrTotal - max($arr);
    $maxTotal = $arrTotal - min($arr);
    echo($minTotal . " " . $maxTotal);
}

$arr_temp = rtrim(fgets(STDIN));

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

miniMaxSum($arr);
