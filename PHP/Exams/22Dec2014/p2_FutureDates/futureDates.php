<?php

$_GET['numbersString'] = 'Th1s 12# is _43$ just %2^ random5text!!1!';
$_GET['dateString'] = '2014-12-22, this is today! Good luck with the exam. Yesterday was 21/12/2014.
Three years ago was Friday 22-12-2011 and it was also working day, but 2011-12-24 was not!';


date_default_timezone_set('Europe/Sofia');
$numberStr = trim($_GET['numbersString']);
$dateStr = trim($_GET['dateString']);

$re = "/([0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))/";
$re2 = "/[^A-Za-z\\d]([0-9]+)[^A-Za-z\\d]/";

$daysToAdd = 0;
if (preg_match_all($re2, $numberStr, $numMatches)) {
    $daysToAdd = array_sum($numMatches[1]);
}
$daysToAdd = intval(strrev(strval($daysToAdd)));

$result = preg_match_all($re, $dateStr, $matches);
if ($result) {
    echo '<ul>';
    foreach ($matches[1] as $currDate) {
        if ($fDate = new DateTime($currDate)) {
            $fDate->add(new DateInterval('P'. $daysToAdd .'D'));
            $result =  $fDate->format('Y-m-d');
            echo '<li>'.$result.'</li>';
        }
    }
    echo '</ul>';
} else {
    echo '<p>No dates</p>';
}
