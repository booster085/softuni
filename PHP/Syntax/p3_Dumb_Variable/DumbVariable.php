<?php
$strType = "Hello";
$intType = 15;
//Double returns float, it's the same in PHP
$floatType = 1.234;
$arrayType = array(1,2,3);
$objectType = (object)[2,34];
function printType($input)
{
    if (is_numeric($input)) {
        var_dump($input);
    } else {
        echo gettype($input);
    }
    echo "<br/>";
}

printType($strType);
printType($intType);
printType($floatType);
printType($arrayType);
printType($objectType);
