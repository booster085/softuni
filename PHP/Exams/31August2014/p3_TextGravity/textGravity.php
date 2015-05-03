<?php
$_GET['text'] = "The Milky Way is the galaxy that contains our star system";
$_GET['lineLength'] = 10;

$input = str_split($_GET['text']);
$matrixLen = intval($_GET['lineLength']);

$matrix = array_chunk($input, $matrixLen);
$len = count($matrix);
$lastRow = $matrix[$len - 1];

//Fill last row
for ($i = 0; $i < $matrixLen - count($lastRow); $i++) {
    array_push($matrix[$len - 1], ' ');
}

for ($i = $len - 1; $i > 0; $i--) {
    for ($k = 0; $k < $matrixLen; $k++) {
        $char = $matrix[$i][$k];
        $row = $i;

        while ($char == ' ' && $row > 0) {
            $upperRow = $row -= 1;
            $matrix[$i][$k] = $matrix[$upperRow][$k];
            $char = $matrix[$upperRow][$k];
            $matrix[$upperRow][$k] = ' ';
        }

    }

}
echo '<table>';
foreach ($matrix as $row) {
    echo '<tr>';
    foreach ($row as $char) {
        echo '<td>'.htmlspecialchars($char).'</td>';
    }
    echo '</tr>';
}
echo '<table>';
