<?php
include 'newsdata.php';
function news5($newsArr){
    $str = '';
    foreach ($newsArr as $article) {
        $str .= $article[0];
    }
    return $str;
}

function news($newsarray){
    $str = "<div class=\"addBlue\">";

    foreach ($newsarray as $article){
        $str .= "<a href=\"$article[4]\" target='_blank'><img src=\"$article[3]\" alt='thumb'/></a>";
        $str .= $article[0];
        $str .= $article[1];
        $str .= $article[2];
    }
    $str .= "</div>";
    return $str;
}