function rotateMatrix(arr){
    var degrees = (arr[0].substring(7, arr[0].length - 1) % 360),
        maxArrLength = Math.max(arr[1].length,(Math.max(arr[2].length, arr[3].length)));
    var matrix = [[],[],[]],
        i;
    matrix[[0]] = arr[1];
    matrix[[1]] = arr[2];
    matrix[[2]] = arr[3];
    matrix = matrix.map(function(element){
        var emptySpaces = new Array(maxArrLength - element.length);
        for (i = 0; i < emptySpaces; i++) {
            emptySpaces[i] = ' ';
        }
        console.log(emptySpaces)
        return element.concat(emptySpaces);
    });
    console.log(matrix);
    switch (degrees) {
        case 0:
            for (i = 0; i < matrix.length; i++) {
                console.log(matrix[i])
            }
            break;
        case 90:
            break;
        case 180:
            for (i = 0; i < matrix.length; i++) {

                console.log(matrix[i]);
            }
            break;
        case 270:
            break;
    }



}

rotateMatrix(['Rotate(180)', 'hello', 'softuni', 'exam']);

