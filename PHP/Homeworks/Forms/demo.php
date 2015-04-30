<!DOCTYPE html>
<html>
<head lang="en">
    <meta content="text/html" charset="UTF-8">
    <title>Awesome Calendar</title>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
<div id=wrapper>
    <?php
    function buildAwesomeCalendar($givenYear) {
        echo "<header><h1>$givenYear</h1></header><section><table id='outerTable'><tbody><tr><td>";
        $months = array('Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември',
            'Октомври', 'Ноември', 'Декември');
        foreach ($months as $key => $month) {
            echo "<table class='monthTable'><thead><tr><th colspan=\"7\">$months[$key]</th></tr><tr><th>По</th>" .
                '<th>Вт</th><th>Ср</th><th>Чт</th><th>Пе</th><th>Сб</th><th>Не</th></tr></thead><tbody>';

            $currentDay = mktime(0, 0, 0, ((int)$key + 1), 1, $givenYear);
            $daysInMonth = date('t', $currentDay);
            $weekCounter = 0;
            $printedDays = 0;

            do {
                $tableRow = '<tr>';
                for ($i = 1; $i < 8; $i++) {
                    $dayOfWeek = date('N', $currentDay);
                    if ($i < $dayOfWeek || $i > $dayOfWeek || ($printedDays >= $daysInMonth)) {
                        $tableRow .= "<td>&#32;</td>";
                        continue;
                    }

                    $dayOfMonth = date('j', $currentDay);
                    $tableRow .= "<td>$dayOfMonth</td>";
                    $printedDays++;
                    $currentDay = strtotime('+1 day', $currentDay);
                }

                echo $tableRow . '</tr>';
                $weekCounter++;

            } while ($weekCounter <= 5);

            echo '</tbody></table>';

            if (((int)$key % 4) == 3) {
                if ($key < 11) {
                    echo '</td></tr><tr><td>';
                } else {
                    echo '</td></tr>';
                }
            }
        }

        echo '</tbody></table></section>';
    }

    buildAwesomeCalendar(2014);
    ?>
</div>
</body>
</html>
