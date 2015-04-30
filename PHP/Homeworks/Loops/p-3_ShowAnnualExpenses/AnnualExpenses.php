<meta charset="UTF-8"/>
<form action="" method="get">
    <label for="inputField">Enter number of years</label>
    <input type="text" name="inputField" id="inputField"/>
    <button type="submit" name="submit">Show costs</button>
</form>
<?php
if (isset($_GET['submit'])) {
    //var_dump(is_numeric($_GET['inputField']));
    if (isset($_GET['inputField']) && is_numeric($_GET['inputField'])) {
        //print Months
        $numberOfYears = $_GET['inputField'];
        $months = array(
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        );
        echo '<table border="1">
                <thead>
                    <tr>';
        $year = date('Y');
        echo '<th>Year</th>';
        for ($i = 0; $i < 12; $i += 1) {
            $month = $months[$i];
            echo '<th>' . $month . '</th>';
        }
        echo '<th>Total:</th>';
        echo '</tr>
            </thead><tbody>';
        $grandTotal = 0;
        for ($j = 0; $j < $numberOfYears; $j++, $year--) {
            $yearTotal = 0;
            echo '<tr><td>'.$year.'</td>';
            for ($k = 0; $k < 12; $k += 1) {
                $expenses = rand(0, 999);
                echo '<td>' . $expenses . '</td>';
                $yearTotal += $expenses;
            }
            echo '<td>'.$yearTotal.'</td></tr>';
        }
        echo '</tbody></table>';




    }
    else echo "Invalid entry.";
}?>


