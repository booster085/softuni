<meta charset="UTF-8"/>
<form action="" method="get">
    <input type="text" name="inputField"/>
    <input type="radio" name="operation" value="pal"/>Check Palindrome
    <input type="radio" name="operation" value="rev"/>Reverse string
    <input type="radio" name="operation" value="spl"/>Split
    <input type="radio" name="operation" value="hash"/>Hash String
    <input type="radio" name="operation" value="shuf"/>Shuffle String
    <button type="submit" name="submit">Submit</button>
</form>

<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['inputField']) && $_GET['inputField'] !== '') {
        if (isset($_GET['operation'])) {
            $operation = $_GET['operation'];
            $strValue = $_GET['inputField'];
            $result = '';
            switch ($operation) {
                case 'pal':
                    $result = $strValue . ' is'. ($strValue !== strrev($strValue) ? ' not ' : ' '). 'palindrome!';
                    break;
                case 'rev':
                    $result = strrev($strValue);
                    break;
                case 'spl':
                    $result = implode(' ', str_split($strValue));
                    break;
                case 'hash':
                    $result = password_hash($strValue, PASSWORD_DEFAULT);
                    break;
                case 'shuf':
                    $result = str_shuffle($strValue);
                    break;
                default:
                    break;
            }
            echo $result;
        } else {
            echo 'Choose operation';
        }
    } else {
        echo 'You must enter a value';
    }
}
