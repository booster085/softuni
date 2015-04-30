<?php
function printBudget($arr, $head){
    $tableStr = "<table border=\"1\">\n<thead>\n
    \t<tr><th>$head[0]</th><th>$head[1]</th><th>$head[2]</th><th>$head[3]</th></tr>\n</thead>\n<tbody>\n";
    for ($i = 0; $i < count($arr) - 1; $i++) {
        $row = $arr[$i];
        $tableStr .= "\t<tr>";
        foreach ($row as $value) {
            $tableStr .= "<td>$value</td>";
        }
        $tableStr .= "</tr>\n";
    }
    $tableStr .= "</tbody>\n";
    $tableStr .= "<tfoot><tr>";

    foreach (end($arr) as $value) {
        $tableStr .= "<td>$value</td>";
    }
    $tableStr .= "</tr></tfoot>\n</table>";
    return $tableStr;
}