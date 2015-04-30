<meta charset="UTF-8"/>
<link rel="stylesheet" href="style.css" type="text/css"/>
<form action="" method="get">
    <textarea name="input" cols="30" rows="10"></textarea>
    <button type="submit" name="submit">Count words</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['input'])) {
        $words = preg_split('/\W+/', strtolower($_GET['input']));
        $words = array_count_values(array_filter($words));
        echo '<table border="1">';
        foreach ($words as $key => $value) {
            echo '<tr><td>'. $key .'</td><td>'. $value .'</td></tr>';
        }
        echo '</table>';
    }
}

//$words = array_count_values(array_filter(preg_split('/\W+/', strtolower($_GET['input'])))); -looks nice :)