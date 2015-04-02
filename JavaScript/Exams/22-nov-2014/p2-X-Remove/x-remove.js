function solve(inputArr){
    var duplicate = [],
        row, col, char,
        tempArr;
    for (row = 0; row < inputArr.length; row++) {
        duplicate.push(inputArr[row].split(''));

    }

    for (row = 0; row < inputArr.length - 2; row++) {
        for (col = 0; col < inputArr[row].length - 2; col++) {
            if (inputArr[row + 1].length > col + 1 &&
                inputArr[row + 2].length > col + 2) {

                char = inputArr[row][col].toLowerCase();
                if (inputArr[row][col + 2].toLowerCase() === char &&
                    inputArr[row + 1][col + 1].toLowerCase() === char &&
                    inputArr[row + 2][col].toLowerCase() === char &&
                    inputArr[row + 2][col + 2].toLowerCase() === char) {

                    duplicate[row][col] = false;
                    duplicate[row][col + 2] = false;
                    duplicate[row + 1][col + 1] = false;
                    duplicate[row + 2][col] = false;
                    duplicate[row + 2][col + 2] = false;
              }
            }

        }

    }
    row = 0;
    col = 0;

    for (row in duplicate) {
        tempArr = [];
        for (col in duplicate[row]) {
            if (duplicate[row][col]) {
                tempArr.push(inputArr[row][col])
            }
        }
        console.log(tempArr.join(''));
    }



}


var input =['JkJ',
            'kJk',
            'JkJljoPopop',
            '+++jlOoppping',
            '++JpJopOpo',
            '+++',
            'hahahah?',
            'ahahahah?',
            'hahahahah?'

];

solve(input);
