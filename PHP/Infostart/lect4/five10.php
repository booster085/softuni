<?php
include 'budget2013.php';
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
echo printBudget($dataArr);
?>
</body>
</html>