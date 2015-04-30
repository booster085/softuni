<meta charset="UTF-8"/>
<form action="" method="get">
    <textarea cols="50" rows="15" name="inputField"></textarea>
    <button type="submit" name="submit">Run</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['inputField']) && !empty($_GET['inputField'])) {
        $re = "/<a href=\"(.*?)\">(.*?)<\\/a>/";
        $text = $_GET['inputField'];
        $formattedText = preg_replace($re, '[URL=$1]$2[/URL]', $text);
        echo $formattedText;
    }
}
     