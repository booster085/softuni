function solve (inputArr){
    var starSystems = {},
        starName, x, y, i,
        ship = { x: 0, y: 0},
        movements, line,
        position, isInTheStar;
    for (i = 0; i < inputArr.length - 2; i += 1) {
        line = inputArr[i].match(/\S+/g);
        starSystems[line[0]] = {
            name: line[0],
            x: parseFloat(line[1]),
            y: parseFloat(line[2])
        };
    }

    line = inputArr[inputArr.length - 2].match(/\S+/g);
    ship.x = parseFloat(line[0]);
    ship.y = parseFloat(line[1]);

    movements = Number(inputArr[inputArr.length - 1]);

    for (i = 0; i <= movements; i++) {
        isInTheStar = false;

        for (var star in starSystems) {

            if (isShipInStarSystem(ship.x, ship.y, starSystems[star].x, starSystems[star].y )) {
                console.log(star.toLowerCase());
                isInTheStar = true;
                break;
            }
        }
        if (!isInTheStar) {
            console.log('space')
        }
        ship.y++;


    }


//star systems are 2x2 big
    function isShipInStarSystem(shipX, shipY, starSystemX, starSystemY){
        var isShipInStar = false;
        if (shipX >= starSystemX - 1 &&
            shipX <= starSystemX + 1 &&
            shipY >= starSystemY - 1 &&
            shipY <= starSystemY + 1) {
            isShipInStar = true;
        }
        return isShipInStar;

    }



}



solve([ 'star132 7.1 8',
        'star777 4 6',
        'star982 1 2',
        '3.9 3.2',
        '11']);