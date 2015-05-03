<?php

$_GET['list'] = 'list=The Hobbit: The Battle of the Five Armies (adventure)- Ian McKellen, Martin Freeman, Richard Armitage, Cate Blanchett / 300
Night at the Museum: Secret of the Tomb (comedy)- Ben Stiller, Robin Williams, Owen Wilson, Dick Van Dyke / 200
Exodus: Gods and Kings (action)- Christian Bale, Joel Edgerton, Ben Kingsley, Sigourney Weaver / 250
Wild (drama)- Reese Witherspoon, Laura Dern, Gaby Hoffmann, Michiel Huisman / 150
Big Hero 6 (action)- Ryan Potter, Scott Adsit, Jamie Chung, T.J. Miller / 250
';

$_GET['minSeats'] = '160';
$_GET['maxSeats'] = '300';
$_GET['filter'] = 'comedy';
$_GET['order'] = 'ascending';


$screenings = preg_split("/\\r\\n/", $_GET['list'], -1, PREG_SPLIT_NO_EMPTY);
$genre = trim($_GET['filter']);
$minSeats = intval($_GET['minSeats']);
$maxSeats = intval($_GET['maxSeats']);
$order = $_GET['order'];

$movies = array();
$re = "/(.*?)\\(([a-z]+)\\)\\s*-\\s*([A-Za-z\\s,\\.]+)\\s*\\/\\s*(\\d+)/";
foreach ($screenings as $movie) {
    $result = preg_match($re, $movie, $matches);
    $movieTopic = trim($matches[1]);
    $movieGenre = trim($matches[2]);
    $movieActors = explode(', ', trim($matches[3]));
    $movieSeats = intval(trim($matches[4]));
    $movies[] = array(
      'movie name' => $movieTopic,
      'genre' => $movieGenre,
      'stars' => $movieActors,
      'seats filled' => $movieSeats
    );
}
$movies = array_filter($movies, function($v) use ($minSeats, $maxSeats){
    return $v['seats filled'] >= $minSeats && $v['seats filled'] <= $maxSeats;
});
if ($genre !== 'all') {
    $movies = array_filter($movies, function($v) use ($genre){
        return $v['genre'] === $genre;
    });
}
usort($movies, function($a, $b) use ($order){
    if ($a['movie name'] === $b['movie name']) {
        return $a['seats filled'] - $b['seats filled'];
    } else {
        if ($order === 'ascending') {
            return strcmp($a['movie name'], $b['movie name']);
        } else {
            return strcmp($b['movie name'], $a['movie name']);
        }
    }
});
foreach ($movies as $movie) {
    echo '<div class="screening"><h2>'.htmlspecialchars($movie['movie name']).'</h2><ul>';
    foreach ($movie['stars'] as $actor) {
        echo '<li class="star">'.htmlspecialchars($actor).'</li>';
    }
    echo '</ul><span class="seatsFilled">'. $movie['seats filled'] .' seats filled</span></div>';
}
