function checkBrackets(str) {
    var bracketCounter = 0,
        i;
    for (i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            bracketCounter++;
        }
        if (str[i] === ')') {
            bracketCounter--;
        }
        if (bracketCounter < 0) {
            break;
        }

    }
    return bracketCounter === 0 ? 'correct' : 'incorrect';
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));