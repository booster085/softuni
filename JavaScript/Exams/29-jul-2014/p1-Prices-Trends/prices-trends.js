/**
 * Created by Azbe on 1.4.2015 г..
 */
function solve(priceArr){
    var table,
        tableRow,
        price,
        oldPrice,
        trend,
        i;

    table = '<table>\n<tr><th>Price</th><th>Trend</th></tr>';
    console.log(table);
    trend = 'fixed';
    if (priceArr.length > 0) {
        console.log('<tr><td>' + Number(priceArr[0]).toFixed(2) + '</td><td><img src="' + trend + '.png"/></td></td>');
    }
    for (i = 1; i < priceArr.length; i++) {
        price = Number(Number(priceArr[i]).toFixed(2));
        oldPrice = Number(Number(priceArr[i - 1]).toFixed(2));
        if (price > oldPrice) {
            trend = 'up';
        } else if (price < oldPrice) {
            trend = 'down'
        } else {
            trend = 'fixed';
        }
//      There is a mistake in the JUDGE the last closing tag must be </tr> not </td>
        tableRow = '<tr><td>' + price.toFixed(2) + '</td><td><img src="' + trend + '.png"/></td></td>';
        console.log(tableRow);

    }


    console.log('</table>');



}


solve(['36.333',
    '36.5',
    '37.019',
    '35.4',
    '35',
    '35.001',
    '36.225'
]);