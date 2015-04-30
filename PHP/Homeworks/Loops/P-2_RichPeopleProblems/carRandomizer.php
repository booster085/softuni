<meta charset="UTF-8"/>
<form action="" method="get">
    <label for="inputField">Enter cars</label>
    <input type="text" name="inputField" id="inputField" style="width: 350px;"/>
    <button type="submit" name="submit">Give me some style</button>
</form>
<?php
if (isset($_GET['submit'])) {
    if (isset($_GET['inputField']) && $_GET['inputField'] !== '') {
        $cars = explode(', ', $_GET['inputField']);
        $colors = array(
            'Red', 'Gold', 'Black', 'Orange', 'White'
        );

        echo '<table border="1">
    <thead>
    <tr>
        <th>Car</th>
        <th>Color</th>
        <th>Count</th>
    </tr>
    </thead>
    <tbody>';

        $len = count($cars);
        for ($i = 0; $i < $len; $i += 1) {
            $car = $cars[$i];
            $color = $colors[array_rand($colors)];
            $quantity = rand(1, 5);
            echo '<tr><td>' . $car . '</td><td>' . $color . '</td><td>' . $quantity . '</td></tr>';
        }
        echo '</tbody></table>';
    }
}
?>





