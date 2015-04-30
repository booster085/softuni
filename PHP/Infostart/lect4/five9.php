<?php
include 'printBudget.php';
include 'budgetData.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
echo printBudget($budget);
?>
</body>
</html>