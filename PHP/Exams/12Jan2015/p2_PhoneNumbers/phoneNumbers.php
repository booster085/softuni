<?php
$_GET['numbersString'] = 'numbersString=QWERTYUIOP123456789
asdfghjkl987654321
ZxcVbnM!@#$%^&*()987654321
';

$text = $_GET['numbersString'];
$re = "/\\b([A-Z][A-Za-z]*)[^A-Za-z0-9\\+]*(\\+?\\d+[\\(\\)-\\.\\/\\s\\d]*\\d+)/";
$phonesNames = array();

$result = preg_match_all($re, $text, $matches);

if ($result) {
    echo '<ol>';
    $i = 0;
    foreach ($matches[1] as $name) {
        $phone = htmlspecialchars(trim($matches[2][$i]));
        $phone = preg_replace("/[^0-9\+]/", '', $phone);
        $name = htmlspecialchars(trim($name));
        echo '<li><b>'.$name.':</b> '.$phone.'</li>';
        $i++;
    }
    echo '</ol>';

} else {
    echo '<p>No matches!</p>';
}
