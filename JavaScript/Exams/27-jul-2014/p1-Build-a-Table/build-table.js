'use strict';
function createTable(arr){
    var output, i, start, end;
    start = Number(arr[0]);
    end = Number(arr[1]);
    output = '<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
    for (i = start; i <= end; i++) {
        output += '<tr><td>' + i + '</td><td>' + i * i + '</td><td>' + checkIfNumberIsFibonacci(i) + '</td></tr>\n';
    }
    output += '</table>';

 console.log(output);

    function checkIfNumberIsFibonacci(num){

        var exp1, exp2;
        // Binet Formula --> if some of (5F^2+4) or (5F^2−4) is perfect root, number is Fibonacci
        exp1 = 5 * num * num + 4;
        exp2 = 5 * num * num - 4;
        if (Math.sqrt(exp1) %1 === 0 || Math.sqrt(exp2) %1 === 0) {
            return 'yes';
        }
        return 'no';

    }

}

createTable(['55','56']);
