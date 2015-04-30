<?php
$month = 5;


$sunday = 0;
for ($i = 1; $i <= 7; $i++) {
    $weekDay = date("N", strtotime("2015-$month-$i"));
    if ($weekDay === "7") {
        $firstSunday =  $i;
        break;
    }
}
for ($i = 0; $i < 5; $i++) {

    if ($firstSunday <= cal_days_in_month(CAL_GREGORIAN, $month, 2015)) {
        echo date("jS F, Y", strtotime("2015-$month-$firstSunday")). "<br/>";
    }
    $firstSunday += 7;
}

