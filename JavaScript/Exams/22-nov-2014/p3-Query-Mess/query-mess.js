function solve(inputArr){
    var i, line, reg, match,
        field, value,
        fieldResult;
    for(i in inputArr){
        line = inputArr[i].replace(/(%20+|\+)+/g, ' ');
        line = line.replace('?', '&');
        reg = /&?([^\n\&\=]+)\s?=([^\n\&]*)/g;
        fieldResult = {};

        while (match = reg.exec(line)) {
            field = match[1].trim();
            value = match[2].trim();
            if (!fieldResult.hasOwnProperty(field)) {
                fieldResult[field] = [];
            }
            fieldResult[field].push(value);

        }
        printObj(fieldResult)

    }

    function printObj(obj){
        var output = '';
        var keys = Object.keys(obj);
        for (i in keys) {
            output += keys[i] + '=[' + obj[keys[i]].join(', ') + ']'
        }
        console.log(output);
    }


}



var input =['github=http://github.com/SoftUni&stars=1&stars=2&stars=3'

];

solve(input);
