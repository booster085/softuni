<?php

$number = 199;

printAllThreeDigitUniqueNumbers($number);

function printAllThreeDigitUniqueNumbers($num){
    $result = [];
    $max = $num >= 1000 ? 987 : $num;
    if ($num > 102) {
        for ($i = 102; $i <= $max; $i++) {
            $numAsStr = strval($i);
            if ($numAsStr[0] !== $numAsStr[1] &&
                $numAsStr[0] !== $numAsStr[2] &&
                $numAsStr[1] !== $numAsStr[2]) {
                $result[] = $i;
            }
        }

    }
    if(!$result){
        echo 'no';
    } else {
        echo implode(', ', $result);
    }
}