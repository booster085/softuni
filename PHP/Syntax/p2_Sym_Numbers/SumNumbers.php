<?php
function printSum($a, $b)
{
    $sum = $a + $b;
    echo '$firstNumber + $secondNumber = ' . "$a + $b = " . sprintf('%.2f', $sum) . "<br/>";
}

$a = 2;
$b = 5;
printSum($a, $b);

$c = 1.567808;
$d = 0.356;
printSum($c, $d);

$e = 1234.5678;
$f = 333;
printSum($e, $f);

