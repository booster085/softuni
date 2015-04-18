<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PrintTags</title>
</head>
<body>
<form action="tagsCounter.php" method="get">
    <p><label for="words">Enter HTML Tags:</label></p>
    <input type="text" name="input" id="words"/>
    <input type="submit" name="submit"/>
</form>
<?php
$tagsArray = file('tagsList.csv');
$tagsArray = array_map(function($elem){
    return substr($elem, 1, count($elem) - 4);
}, $tagsArray);

session_start();

if (isset($_GET['submit'])) {
    if (!isset($_SESSION['count'])) {
        $_SESSION['count'] = 0;
    }

    if ($_GET['input'] !== "") {
        $input = $_GET['input'];

        if (in_array($input, $tagsArray)) {
            $_SESSION['count'] += 1;
            echo "Valid HTML tag<br/>";
        } else {
            echo "Invalid HTML tag<br/>";
        }
        echo "Score: {$_SESSION['count']}";
    } else {
        echo "Enter value";
    }

}
?>
</body>
</html>
