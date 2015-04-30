<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculate Interest</title>
</head>
<body>
<form action="calculateInterest.php">
    <div><label for="amount">Enter Amount </label><input type="text" id="amount" name="amount"/></div>
    <div><input type="radio" id="usd" value="usd" name="cur"/><label for="usd">USD</label>
    <input type="radio" id="eur" value="eur" name="cur"/><label for="eur">EUR</label>
    <input type="radio" id="bgn" value="bgn" name="cur"/><label for="bgn">BGN</label></div>
    <div><label for="interest">Compound Interest Amount </label><input type="text" id="interest" name="interest"/></div>
    <select name="period" id="period">
        <option value="6" selected="selected">6 Months</option>
        <option value="12">1 Year</option>
        <option value="24">2 Years</option>
        <option value="60">5 Years</option>
    </select>
    <input type="submit" value="Calculate" name="calc"/>
</form>
<?php
if (isset($_GET['calc'])) {
    $amount = intval($_GET['amount']);
    $interest = intval($_GET['interest']);
    $period = intval($_GET['period']);
    $interestPerMonth = $interest/12/100;
    for ($i = 0; $i < $period; $i++) {
        $amount += $amount * $interestPerMonth;
    }
    $amount = round($amount, 2);

    switch($_GET['cur']){
        case 'usd': $currency = "&#36";
            break;
        case 'eur': $currency = "&#8364";
            break;
        case 'bgn': $currency = "&#1083&#1074";
            break;
    }
    echo "<span>$currency $amount</span>";
}

?>
</body>
</html>
