<table border="1">
    <thead>
    <tr>
        <th>Number</th>
        <th>Square</th>
    </tr>
    </thead>
    <tbody>
    <?php
    $total = 0;
    for ($i = 0; $i <= 100; $i += 2) {
        $sqroot = round(sqrt($i), 2);
        echo '<tr><td>' . $i . '</td><td>' . $sqroot . '</td></tr>';
        $total += $sqroot;
    }
    ?></tbody>
    <tfoot>
    <tr>
        <td><b>Total</b></td>
        <td><?php echo $total?></td>
    </tr>
    </tfoot>
</table>

