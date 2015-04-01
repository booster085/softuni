function revealTriangles(textArr) {
    var i, j, currentChar,
        cloneArr = [];
    for (i = 0; i < textArr.length; i++) {
             cloneArr[i] = textArr[i];
             cloneArr[i] = cloneArr[i].split('');
    }
    for (i = 0; i < textArr.length - 1; i++) {
        for (j = 1; j < textArr[i + 1].length - 1; j++) {

                currentChar = textArr[i][j];
                if (currentChar === textArr[i + 1][j - 1] &&
                    currentChar === textArr[i + 1][j] &&
                    currentChar === textArr[i + 1][j + 1]) {
                    cloneArr[i][j] = '*';
                    cloneArr[i + 1][j - 1] = '*';
                    cloneArr[i + 1][j] = '*';
                    cloneArr[i + 1][j + 1] = '*';
                }

        }
    }

    for (var line in cloneArr) {
        console.log(cloneArr[match].join(''));
    }

}


revealTriangles(['aa',
    'aaa',
    'aaaa',
    'aaaaa'
]);