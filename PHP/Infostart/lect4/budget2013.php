<meta charset="UTF-8">
<?php
$filePointer = fopen('budget2013.csv', 'r');
$dataArr = array();
$head = fgetcsv($filePointer);
while ($row = fgetcsv($filePointer)) {
    $dataArr[] = array_combine($head, $row);
}

