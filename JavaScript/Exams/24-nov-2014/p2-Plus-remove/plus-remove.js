function solve(inputArr){
    var duplicate =[],
        char, row, col, output;

    for (row in inputArr) {
        duplicate.push(inputArr[row].split(''));
    }

    for (row = 0; row < inputArr.length - 2; row += 1) {
        for (col = 1; col < inputArr[row].length; col += 1) {
            if (inputArr[row + 1].length > col + 1 &&
                inputArr[row + 2].length > col) {
                char = inputArr[row][col].toLowerCase();
                if (inputArr[row + 1][col - 1].toLowerCase() === char &&
                    inputArr[row + 1][col].toLowerCase() === char &&
                    inputArr[row + 1][col + 1].toLowerCase() === char &&
                    inputArr[row + 2][col].toLowerCase() === char) {

                    duplicate[row][col] = false;
                    duplicate[row + 1][col - 1] = false;
                    duplicate[row + 1][col] = false;
                    duplicate[row + 1][col + 1] = false;
                    duplicate[row + 2][col] = false;
                }
            }
        }
    }
    for (row in duplicate) {
        output = [];
        for (col in duplicate[row]) {
            if (duplicate[row][col]) {
                output.push(duplicate[row][col]);
            }
        }
        console.log(output.join(''));
    }



}


solve(['@s@a@p@una',
        'p@@@@@@@@dna',
        '@6@t@*@*ego',
        'vdig*****ne6',
        'li??^*^*'

]);

