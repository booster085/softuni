<?php
$_GET['students'] = '
Pesho, pesho.g@gmail.com, onsite, 400
Mariika, mariika@gmail.com, online, 350
Geri, geri@gmail.com, online, 50
Pesho, peshkata@gmail.com, onsite, 0
Gosho & Kiro, gosho@gmail.com, onsite, 400
Mincho, praznikov@vremeto.bg, online, 50
';
$_GET['column'] = 'id'; //sorting type could be "id", "username" or "result".
$_GET['order'] = 'descending';  //could be ascending



$criteria = $_GET['column'];
$order = $_GET['order'];
$input = explode("\r\n", trim($_GET['students']));
$students = array();
$id = 1;
foreach ($input as $student) {
    $row = explode(', ', $student);
    $students[] = array(
      'id' => $id,
      'username' => trim($row[0]),
      'email'    => trim($row[1]),
      'type'     => trim($row[2]),
      'result'   => intval($row[3])
    );
    $id++;
}
    $students = sortStudents($criteria, $order, $students);

echo <<<KUR
<table><thead><tr><th>Id</th><th>Username</th><th>Email</th><th>Type</th><th>Result</th></tr></thead>
KUR;
foreach ($students as $student) {
    echo '<tr><td>'.$student['id'].'</td><td>'.htmlspecialchars($student['username']).
        '</td><td>'.htmlspecialchars($student['email']).'</td><td>'.htmlspecialchars($student['type']).
        '</td><td>'.$student['result'].'</td></tr>';

}
echo '</table>';

function sortStudents($sortBy, $order, $arr){

            usort($arr, function($a, $b) use ($sortBy, $order){
                if ($a[$sortBy] === $b[$sortBy] || $sortBy === 'id') {
                    if ($order === 'descending') {
                        return $b['id'] - $a['id'];
                    } else {
                        return $a['id'] - $b['id'];
                    }
                } else {
                    if ($sortBy === 'result') {
                        if ($order === 'descending') {
                            return $b['result'] - $a['result'];
                        } else {
                            return $a['result'] - $b['result'];
                        }
                    } else {
                        if ($order === 'descending') {
                            return strcmp($b['username'], $a['username']);
                        } else {
                            return strcmp($a['username'], $b['username']);
                        }
                    }

                }
            });
    return $arr;
}
