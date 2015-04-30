<?php
/**
 * prints values of an array as HTML string with <br> and CRLF
 *
 * @param array $arr
 *
 * @return string
 */
function printArray($arr) {
    $str = '';
    foreach ($arr as $key=>$value) {
        $str .= $key.' '.$value . '<br/>'."\n";
    }
    return $str;
}


