<meta charset="utf-8">
<?php
$flappyBirdFile = "C:\Users\Azbe\Desktop\FlappyBird.txt";
$text = "You are very lucky bastard. I'm proud of you";
file_put_contents($flappyBirdFile, $text, FILE_APPEND);
?>