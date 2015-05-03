<?php

$_GET['luggage'] = 'furniture;living room;pink couch;40.85kgC|_|furniture;bedroom;night table;
5.12kgC|_|boxes;kitchen;plates;10.36kgC|_|boxes;kitchen;cups;10.36kgC|_|boxes;kitchen;tableware;
7.6kgC|_|boxes;living room;glasses;3.32kgC|_|boxes;living room;dresses;4.32kgC|_|bags;hall;shoes;5.9kgC|_|';

$_GET['typeLuggage'] = ['furniture', 'boxes', 'bags'];

$_GET['room'] = 'living room';

$_GET['minWeight'] = '5';
$_GET['maxWeight'] = '50';

//furniture, boxes and bags

//every one has ROOM, WIGHT kg and a NAME

//luggage separator "C|_|"

//LIST and 4 FILTER criteria

//LIST -> "[luggage type];[room];[name];[weight]"

//Examp ->"furniture;living room;pink couch;40.85kg"

//FIRST -> 1, 2, 3 or none luggage piece types

//SECOND -> ROOM

//THIRD & FOURTH -> MIN I MAX WEIGHT for all luggage of ONE TYPE for ONE ROOM

$luggage = array_filter(explode('C|_|', trim($_GET['luggage'])));

$lugTypes = $_GET['typeLuggage'];
$room = $_GET['room'];
$minWeight = $_GET['minWeight'] = '5';
$maxWeight = $_GET['maxWeight'] = '50';
$lugPieces = array();
foreach ($luggage as $piece) {
    $piece = explode(';', $piece);
    $type = trim($piece[0]);
    $place = trim($piece[1]);
    $item = trim($piece[2]);
    $weight = intval($piece[3]);
    if (!array_key_exists($type, $lugPieces)) {
        $lugPieces[$type] = array();
    }
    if (!array_key_exists($place, $lugPieces[$type])) {
        $lugPieces[$type][$place] = array();
        $lugPieces[$type][$place]['weight'] = 0;
    }
    $lugPieces[$type][$place]['weight'] += $weight;
    $lugPieces[$type][$place]['items'][] = $item;


}

$lugPieces = array_filter($lugPieces, function ($v, $k) use ($lugTypes) {
    return in_array($k, $lugTypes);
}, 1);

foreach ($lugPieces as $key => $piece) {
    $lugPieces[$key] = array_filter($piece, function ($v, $k) use ($room, $minWeight, $maxWeight) {
        return $k === $room && ($v['weight'] >= $minWeight && $v['weight'] <= $maxWeight);
    }, 1);

}
$lugPieces = array_filter($lugPieces);

ksort($lugPieces);
foreach ($lugPieces as $key => $piece) {
    ksort($piece);
    foreach ($piece as $k => $lugRoom) {
        sort($lugRoom['items']);
        $piece[$k] = $lugRoom;
    }
    $lugPieces[$key] = $piece;
}


echo '<ul>';
if (!empty($lugPieces)) {
    foreach ($lugPieces as $type => $item) {
        echo '<li><p>' . htmlspecialchars($type) . '</p><ul>';
        foreach ($item as $kroom => $room) {
            echo '<li><p>' . htmlspecialchars($kroom) . '</p>';
            foreach ($room['items'] as $k => $item) {
                $room['items'][$k] = htmlspecialchars($item);
            }
            $pieces = implode(', ', $room['items']);
            echo '<ul><li><p>' . $pieces . ' - ' . $room['weight'] . 'kg</p></li></ul></li>';
        }
        echo '</ul></li>';
    }
}
echo '</ul>';



