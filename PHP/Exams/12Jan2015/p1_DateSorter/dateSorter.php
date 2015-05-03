<?php

$_GET['list'] = '1-1-1920
1-1-1930
1-1-1900
1-1-1940
1-1-1950
1-1-1910

';

$_GET['currDate'] = '1-1-1930';

date_default_timezone_set('Europe/Sofia');

$dateList = preg_split("/\r\n/", $_GET['list'], -1, PREG_SPLIT_NO_EMPTY);
$currDate = date_create($_GET['currDate']);

$validDates = array();
foreach ($dateList as $rowDate) {

        if (date_create($rowDate)) {
            $validDates[] = date_create($rowDate);
        }
}
sort($validDates);
echo '<ul>';
foreach ($validDates as $date) {

    if ($date <= $currDate) {
        echo '<li><em>'.date_format($date, 'd/m/Y').'</em></li>';
    } else {
        echo '<li>'.date_format($date, 'd/m/Y').'</li>';
    }
}
echo '</ul>';
