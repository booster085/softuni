function startGame() {
// Generate random player to start the game
    if (Math.random() < 0.5) {
        document.turn = 'O';
    } else {
        document.turn = 'X';
    }
    document.getElementById('msg').innerHTML = 'PLAY!';
    document.gameOver = null;
    document.counter = 1;
}
function nextMove(box) {
    var i;
     if (box.innerHTML === '' && document.gameOver === null) {
        box.innerHTML = document.turn;
        changeTurn();
        document.counter++;
    } else if (document.gameOver !== null) {
// When game is over reset all box values and color and Main message
         for (i = 1; i <= 9; i++) {
             getBox(i).innerHTML = '';
             changeColor(i, 'green');
         }
         startGame();
     }
}
function changeTurn() {
    if (checkForWin(document.turn)) {
        document.getElementById('msg').innerHTML = "Player '" + document.turn + "' wins!";
        document.gameOver = document.turn;
    } else if (document.counter === 9) {
        document.getElementById('msg').innerHTML = 'Draw!';
        document.gameOver = 'draw';
    } else if (document.turn === 'X') {
        document.turn = 'O';
    } else {
        document.turn = 'X';
    }
}
function checkForWin(player) {
    var result = false;
    if (checkRow(1, 2, 3, player) ||
        checkRow(4, 5, 6, player) ||
        checkRow(7, 8, 9, player) ||
        checkRow(1, 4, 7, player) ||
        checkRow(2, 5, 8, player) ||
        checkRow(3, 6, 9, player) ||
        checkRow(1, 5, 9, player) ||
        checkRow(3, 5, 7, player)) {
        result = true;
    }
    return result;
}
function checkRow(a, b, c, player) {
    var result = false;
    if (getBoxValue(a) === player && getBoxValue(b) === player && getBoxValue(c) === player) {
// Changes winners color
        changeColor(a, '#3565dd');
        changeColor(b, '#3565dd');
        changeColor(c, '#3565dd');
        result = true;
    }
    return result;
}
function getBoxValue(number) {
    return getBox(number).innerHTML;
}
function getBox(number) {
    return document.getElementById('s' + number);
}
function changeColor(number, color){
    getBox(number).style.color = color;
}

