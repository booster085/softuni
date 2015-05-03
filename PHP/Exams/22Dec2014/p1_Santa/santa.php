<?php

$_GET['childName'] = 'Georgi-Georgiev';
$_GET['wantedPresent'] = 'Laptop';
$_GET['riddles'] = 'They come out at night without being called, and are lost in the day without being stolen. What are they?;What goes up but never comes down?;We see it once in a year, twice in a week, and never in a day. What is it?';

$child = trim($_GET['childName']);
$present = trim($_GET['wantedPresent']);
$riddles = explode(';', $_GET['riddles']);

$child = str_replace(' ', '-', $child);
$nameLen = strlen($child);
$index = ($nameLen) % count($riddles);
if ($index === 0) {
    $index = count($riddles);
}
$currRiddle = $riddles[$index - 1];
var_dump($nameLen);

echo '$giftOf'.htmlspecialchars($child).' = $[wasChildGood] ? \''.htmlspecialchars($present).'\' : \''.htmlspecialchars($currRiddle).'\';';

//Georgi-Georgiev