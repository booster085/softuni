<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PrintTags</title>
</head>
<body>
<form action="mostFrequentTag.php" method="get">
    <p><label for="words">Enter Tags:</label></p>
    <input type="text" name="input" id="words"/>
    <input type="submit" name="submit"/>
</form>
<?php
if (isset($_GET['submit'])) {
    $words = explode(', ', $_GET['input']);
    $words = (array_count_values($words));
    arsort($words);

    foreach($words as $key => $value){
        echo $key . ' : ' . htmlentities($value) . " times<br/>\n";
    }

}
?>
</body>
</html>

