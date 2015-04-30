<meta charset="UTF-8"/>
<form action="" method="get">
    <textarea cols="50" rows="15" name="text"></textarea>
    <input type="text" name="word" style="display: block;"/>
    <button type="submit" name="submit" style="display: block;">Go!</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['text']) && isset($_GET['word'])) {
        $keyword = $_GET['word'];
        $text = preg_match_all('/(.*?)(\\.|!|\\?)/', $_GET['text'], $matches, PREG_OFFSET_CAPTURE );
        
        foreach ($matches[0] as $sentence) {
            if (preg_match('/\\s'.$keyword.'\\s/', $sentence[0])) {
                echo $sentence[0] . '<br/>';
            }
        }
    }
}
