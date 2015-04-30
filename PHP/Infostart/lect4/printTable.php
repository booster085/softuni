<?php
function createTable($arr){
    $table = "<table border=\"1\">\n";
    $table .= "<thead>\n\t<tr><th>Key</th><th>Value</th></tr>\n</thead>\n<tbody>\n";
    foreach ($arr as $key => $value) {
        $table .= "\t<tr><td>$key</td><td>$value</td></tr>\n";
    }
    $table .= "</tbody>\n</table>\n";

    return $table;
}