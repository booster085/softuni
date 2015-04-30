<meta charset="UTF-8"/>
<form action="" method="get">
    <label for="inputField">Input string</label>
    <input type="text" name="inputField" id="inputField"/>
    <button type="submit" name="submit">Submit</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['inputField'])) {
        $values = explode(', ', $_GET['inputField']);

        echo '<table border="1">';
        $len = count($values);
        for ($i = 0; $i < $len; $i += 1) {
            echo '<tr>
        <td>'. $values[$i] .'</td>';
            $result = 'I cannot sum that';
            $sum = 0;
            $elementLen = strlen($values[$i]);
            if (is_numeric($values[$i])) {
                for ($j = 0; $j < $elementLen; $j += 1) {
                    $sum += $values[$i][$j];
                }
                $result = $sum;
            }

        echo '<td>' . $result . '</td></tr>';
        }
        echo '</table>';
    }
}
?>
