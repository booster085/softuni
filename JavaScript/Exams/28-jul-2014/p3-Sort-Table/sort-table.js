function solve(array){
    var reg,
        tableHead = array[0] + '\n' + array[1],
        match,
        price,
        rowObj = {},
        sortedArr = [];

    for (var j = 2; j < array.length - 1; j+=1) {
        reg = /<td>.*?<\/td><td>(.*?)<\/td>/g;
        match = reg.exec(array[j]);
        price = Number(match[1]);
        rowObj = { price: price, row: array[j]};
        sortedArr.push(rowObj);
    }
    sortedArr.sort(function(a, b){
        if (a.price != b.price) {
            return a.price - b.price;
        } else {
            return a.row > b.row;
        }
    });

    printTable(sortedArr);

    function printTable(tableArr){
        var i;
        console.log(tableHead);
        for (i = 0; i < tableArr.length; i+=1) {
            console.log(tableArr[i].row);
        }
        console.log(array[array.length - 1]);
    }

}



solve(['<table>',
        '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
        '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
        '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
        '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
        '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
        '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
        '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>']);