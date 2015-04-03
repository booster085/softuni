function solve(map){
    var horizontalPos,
        verticalPos,
        windDirection, row, col,
        isFound = false,
        obstacle;

    for (row in map) {
        if (!isFound) {
            for (col in map[row]) {
                if (map[row][col] === 'o') {
                    verticalPos = Number(row) + 1;
                    horizontalPos = Number(col);
                    isFound = true;
                    break;
                }
            }
        }

        if (isFound) {
            windDirection = 0;
            for (var i in map[verticalPos]) {
                if (map[verticalPos][i] === '>') {
                    windDirection++;
                }
                if (map[verticalPos][i] === '<') {
                    windDirection--;
                }
            }

            horizontalPos += windDirection;
            obstacle = map[verticalPos][horizontalPos];

            switch (obstacle) {
                case '_': console.log('Landed on the ground like a boss!\n' + verticalPos + ' ' + horizontalPos);
                    return;
                case '~': console.log('Drowned in the water like a cat!\n' + verticalPos + ' ' + horizontalPos);
                    return;
                case '/':
                case '|':
                case '\\': console.log('Got smacked on the rock like a dog!\n' + verticalPos + ' ' + horizontalPos);
                    return;
            }


            verticalPos++;
        }
    }

}


solve(['-------------------------',
       '>------------------------',
       '>------------------------',
       '>------o----------/\\-----',
       '-->--------->----/->\\->--',
       '>----->>>-/\\----/----\\---',
       '---------/--\\~~/-<<<--\\--',
       '<-------/----\/--------\\-',
       '\\------/----------------\\',
       '-\\____/------------------'

    ]);
