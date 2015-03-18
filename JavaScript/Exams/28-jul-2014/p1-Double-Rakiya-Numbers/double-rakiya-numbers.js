function solve(arr){
    var numbersArr = [],
        i, j,
        output = '<ul>\n',
        start = Number(arr[0]),
        end = Number(arr[1]);
    for (i = start; i <= end; i++) {
            if(compareDigits(i)) {
                output += "<li><span class='rakiya'>"+ i +'</span><a href="view.php?id=' + i + '">View</a></li>\n';
            } else {
                output += "<li><span class='num'>"+ i +"</span></li>\n"
            }

    }
    output += '<ul>';
    console.log(output);
    function compareDigits(number){
        var j, k, numberStr = String(number);
        for (j = 0; j < numberStr.length - 3; j++) {
            for (k = j + 2; k < numberStr.length - 1; k++) {
                if ((numberStr[j] + numberStr[j + 1]) === (numberStr[k] + numberStr[k + 1])) {
                    return true;
                }
            }
        }
        return false;
    }

}

solve(['11210','11215']);
solve(['55555','55560']);

