<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Input</title>
    <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
<!--OPEN HTML FILE FIRST-->

<?php
$name = $_GET['name'];
$phone = $_GET['phone'];
$age = $_GET['age'];
$address = $_GET['address'];
echo "<main class='tableWrapper'>
    <table>
        <tr>
            <td>Name</td>
            <td>$name</td>
        </tr>
        <tr>
            <td>Phone Number</td>
            <td>$phone</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>$age</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>$address</td>
        </tr>
    </table>
</main>";
?>
</body>
</html>

