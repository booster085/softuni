function solve(inputArr){
    var i, currentLine, regReplace, match, regMatch,
        result, field, value;

    regReplace = /((\+)|(%20)|(\s+))+/g;
    regMatch = /\&?([^\=\&]+)\s?=\s?([^\&\n]+)/g;

    for (i in inputArr) {
        currentLine = inputArr[i];
        currentLine = currentLine.replace(regReplace, ' ')
            .replace('?', '&');
        result = {};

        while(match = regMatch.exec(currentLine)){
            field = match[1].trim();
            value = match[2].trim();

            if (!result.hasOwnProperty(field)) {
                result[field] = [];
            }
            result[field].push(value);
        }
        printResult(result);
    }

    function printResult(obj){
        var output = '';
        for (i in obj) {
            output += i + '=[' + obj[i].join(', ') + ']'
        }
        console.log(output);
    }


}



solve(['foo=%20foo&value=+val&foo+=5+%20+203',
        'foo=poo%20&value=valley&dog=wow+',
        'url=https://softuni.bg/trainings/coursesinstances/details/1070',
        'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]);
