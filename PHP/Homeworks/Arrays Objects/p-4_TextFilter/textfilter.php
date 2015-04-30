<meta charset="UTF-8"/>
<form action="" method="get">
    <textarea cols="50" rows="15" name="text"></textarea>
    <input type="text" name="banList" style="display: block;"/>
    <button type="submit" name="submit" style="display: block;">Go!</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['text']) && isset($_GET['banList'])) {
        $banList = explode(', ', $_GET['banList']);
        $text = $_GET['text'];

        foreach ($banList as $banWord) {
            $asterisks = str_repeat('*', strlen($banWord));
            $text = preg_replace('/'.$banWord.'/', $asterisks, $text);
        }
        echo $text;
    }
}

