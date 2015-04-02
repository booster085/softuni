function solve(matrix){
    var row,
        rowLen,
        col,
    resultObj = {I: 0, L: 0, J: 0, O: 0, Z: 0, S: 0, T: 0};

    rowLen = matrix[0].length;
    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < rowLen; col++) {
// O
            if (col < rowLen - 1 && row < matrix.length - 1) {
                if (matrix[row][col] === 'o' &&
                    matrix[row + 1][col] === 'o' &&
                    matrix[row][col + 1] === 'o' &&
                    matrix[row + 1][col + 1] === 'o') {
                    resultObj.O++;
                }
// L
                if (matrix.length > 2 && row < matrix.length - 2){
                    if (matrix[row][col] === 'o' &&
                        matrix[row + 1][col] === 'o' &&
                        matrix[row + 2][col] === 'o' &&
                        matrix[row + 2][col + 1] === 'o') {
                        resultObj.L++;
                    }
// J
                    if (matrix[row + 2][col] === 'o' &&
                        matrix[row + 2][col + 1] === 'o' &&
                        matrix[row + 1][col + 1] === 'o' &&
                        matrix[row][col + 1] === 'o') {
                        resultObj.J++;
                    }


                }
            }
            if (col < rowLen - 2 && row < matrix.length - 1) {
// Z
                if (matrix[row][col] === 'o' &&
                    matrix[row][col + 1] === 'o' &&
                    matrix[row + 1][col + 1] === 'o' &&
                    matrix[row + 1][col + 2] === 'o') {
                    resultObj.Z++;
                }
// S
                if (matrix[row + 1][col] === 'o' &&
                    matrix[row + 1][col + 1] === 'o' &&
                    matrix[row][col + 1] === 'o' &&
                    matrix[row][col + 2] === 'o') {
                    resultObj.S++;
                }
// T
                if (matrix[row][col] === 'o' &&
                    matrix[row][col + 1] === 'o' &&
                    matrix[row + 1][col + 1] === 'o' &&
                    matrix[row][col + 2] === 'o') {
                    resultObj.T++;
                }
            }
// I
            if (matrix.length > 3 && row < matrix.length - 3) {
                if (matrix[row][col] === 'o' &&
                    matrix[row + 1][col] === 'o' &&
                    matrix[row + 2][col] === 'o' &&
                    matrix[row + 3][col] === 'o') {
                    resultObj.I++;
                }
            }



        }

    }
    console.log(JSON.stringify(resultObj))


}


solve([ '-oo',
        'ooo',
        'ooo'
]);