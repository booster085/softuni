<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Input</title>
    <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
<main class="wrapper">
    <form action="GetFormData.php" method="get">

        <input type="text" name="name" placeholder="Name.."/>

        <input type="text" name="age" placeholder="Age.."/>

        <section class="radioBtn">
            <input type="radio" name="sex" id="male" value="male" checked/><label for="male">Male</label>
        </section>
        <section class="radioBtn">
            <input type="radio" name="sex" id="female" value="female"/><label for="female">Female</label>
        </section>
        <input type="submit" name="submit"/>
    </form>
</main>
<?php
function displayInfo()
{
    $name = $_GET['name'];
    $age = $_GET['age'];
    $sex = $_GET['sex'];
    echo "<span>My name is $name. I am $age years old. I am $sex.</span>";
}

if (isset($_GET['submit'])) {
    displayInfo();
} else {
    echo "Please enter your details";
}
?>
</body>
</html>
