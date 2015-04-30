<meta charset="UTF-8">
<?php
$filePointer = fopen('budget2014.csv', 'r');
$budget = array();
$head = fgetcsv($filePointer, 0, ";");
while ($row = fgetcsv($filePointer, 0, ";")) {
    $budget[] = array_combine($head, $row);
}
