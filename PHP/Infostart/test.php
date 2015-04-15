<meta charset="utf-8">
<?php
$a = array (
    'pap' => 'a',
    'vuii' => 'b',
    'kurvi' => 'c',
    'ceco' => 'd',
    'iliikata' => 'e'
);
end($a);
echo key($a) . "<br/>";
reset($a);
echo key($a);


//for ($i=0; $i<$c; $i++) {
//    $str .= $i . ' ' . $a[$i] . '<br/>'."\n";
//}

?>