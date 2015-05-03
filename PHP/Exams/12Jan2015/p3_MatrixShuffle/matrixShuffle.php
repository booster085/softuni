<?php
$_GET['text'] = 'Soovfetonetem  sssadroedw atrneahr dyri  aUhi stv';
$_GET['size'] = 7;


$textInput = $_GET['text'];
$size = intval($_GET['size']);

$matrix = array();

$text = str_pad($textInput, $size * $size, ' ');

$counter = $size * $size;
$maxCol = $size;
$minCol = 0;
$maxRow = $size;
$minRow = 0;
$pos = 0;

while ($pos < strlen($text)) {

    for ($col = $minCol; $col < $maxCol; $col++) {
        $matrix[$minRow][$col] = $text[$pos];
        $pos++;
    }
    $minRow++;
    for ($row = $minRow; $row < $maxRow; $row++) {
        $matrix[$row][$maxCol-1] = $text[$pos];
        $pos++;
    }
    $maxCol--;
    for ($col = $maxCol - 1; $col >= $minCol; $col--) {
        $matrix[$maxRow-1][$col] = $text[$pos];
        $pos++;
    }
    $maxRow--;
    for ($row = $maxRow - 1; $row >= $minRow; $row--) {
        $matrix[$row][$minCol] = $text[$pos];
        $pos++;
    }
    $minCol++;

}
$whites = '';
$blacks = '';
for ($i = 0; $i < $size; $i++) {
    for ($k = 0; $k < $size; $k++) {
        if ($i %2 === 0) {
            if ($k % 2 === 0) {
                $whites .= $matrix[$i][$k];
            } else {
                $blacks .= $matrix[$i][$k];
            }
        } else {
            if ($k % 2 !== 0) {
                $whites .= $matrix[$i][$k];
            } else {
                $blacks .= $matrix[$i][$k];
            }
        }
    }
}
//Check for palindrome
$result = $whites.$blacks;
if (isPalindrome($result)) {
    echo '<div style=\'background-color:#4FE000\'>'.$result.'</div>';
} else {
    echo '<div style=\'background-color:#E0000F\'>'.$result.'</div>';
}

/**
 * @param $input
 * @return bool
 */
function isPalindrome($input){
    $input = preg_replace('/[^A-Za-z]/', '', $input);
    return strtolower($input) == strtolower(strrev($input));
}

