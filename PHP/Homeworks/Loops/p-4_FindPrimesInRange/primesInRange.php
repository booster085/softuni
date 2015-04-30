<meta charset="UTF-8"/>
<form action="" method="get">
    <label for="start">Starting Index: </label>
    <input type="text" name="start" id="start"/>
    <label for="end">End: </label>
    <input type="text" name="end" id="end"/>
    <button type="submit" name="submit">Show costs</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['start']) && is_numeric($_GET['start']) &&
        isset($_GET['end']) && is_numeric($_GET['end'])) {
        $start = $_GET['start'];
        $end = $_GET['end'];
        for ($i = $start; $i <= $end; $i += 1) {
            $sqrt = sqrt($i);
            $isPrime = true;
            for ($j = 2; $j <= $sqrt; $j += 1) {
                if (($i % $j) === 0) {
                    $isPrime = false;
                }
            }
            if ($isPrime) {
                echo '<b>'.$i.'</b>';
            } else {
                echo $i;
            }
            echo ($i < $end ? ', ' : '');
        }
        }
}
