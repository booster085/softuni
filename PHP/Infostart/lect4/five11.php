<?php
include 'budget2014.php';
include 'printBudget.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
echo printBudget($budget, $head);
?>
</body>
</html>