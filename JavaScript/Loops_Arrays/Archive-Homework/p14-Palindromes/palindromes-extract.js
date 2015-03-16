function findPalindromes(text) {
    var palindromArr = [], j,
        wordsArr = text.toLowerCase().match(/\w+/g);
    for (j = 0; j < wordsArr.length; j++) {
        if (checkLetters(wordsArr[j])) {
            palindromArr.push(wordsArr[j]);
        }
    }
    return palindromArr.join(', ');


    function checkLetters(word) {
        var i;
        for (i = 0; i < word.length/2; i++) {
            if (word[i] !== word[word.length - i - 1]) {

                return false;
            }

        }
        return true;
    }
}

console.log(findPalindromes('There is a man, his name was Bob.'));