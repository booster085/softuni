<meta charset="UTF-8"/>
<link rel="stylesheet" href="style.css" type="text/css"/>
<form action="" method="get">
    <textarea name="input" cols="30" rows="10"></textarea>
    <button type="submit" name="submit">Color text</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['input'])) {
        $chars = str_split($_GET['input']);
        foreach ($chars as $char) {
            if (ord($char) % 2 === 0) {
                echo '<span class="red-color">' . $char . ' </span>';
            } else {
                echo '<span class="blue-color">' . $char . ' </span>';
            }
        }
    }
}