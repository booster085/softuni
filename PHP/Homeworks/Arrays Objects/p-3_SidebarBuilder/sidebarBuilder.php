<meta charset="UTF-8"/>
<link rel="stylesheet" href="style.css"/>
<form action="" method="get">
    <label for="cats">Categories: </label><input type="text" id="cats" name="cats"/>
    <label for="tags">Tags: </label><input type="text" id="tags" name="tags"/>
    <label for="months">Months: </label><input type="text" id="months" name="months"/>
    <button type="submit" name="submit">Generate</button>
</form>
<?php
if (isset($_GET['submit'])) {

    if (isset($_GET['cats']) && isset($_GET['tags']) && isset($_GET['months'])) {
        $categories = explode(', ', $_GET['cats']);
        $tags = explode(', ', $_GET['tags']);
        $months = explode(', ', $_GET['months']);
        printSection('Categories', $categories);
        printSection('Tags', $tags);
        printSection('Months', $months);

    } else {
        echo 'Fill all fields!';
    }
}
?>
<?php
function printSection($topic, $itemsArr){
    echo '<section><h1>'. $topic .'</h1>';
    printUList($itemsArr);
    echo '</section>';
}
function printUList($elementsArr){
    echo '<ul>';
    foreach ($elementsArr as $item) {
        echo '<li>' . $item . '</li>';
    }
    echo '</ul>';
}
?>

