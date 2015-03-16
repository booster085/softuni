function findMostFrequentWord(text) {
    var wordsInText,
        wordCount = {},
        word, i,
        maxCount = 1,
        key;

    wordsInText = text.toLocaleLowerCase().match(/\w+/g);
    wordsInText.sort();

    for(i = 0; i < wordsInText.length; i++)  {
        word = wordsInText[i];
        if (!(word in wordCount)) {
            wordCount[word] = 1;
        } else {
            wordCount[word] += 1;
            if (wordCount[word] > maxCount) {
                maxCount = wordCount[word];
            }
        }
    }

    for (key in wordCount) {
        if (wordCount.hasOwnProperty(key) && wordCount[key] === maxCount) {
            console.log(key + ' -> ' + wordCount[key] + ' times')
        }
    }

}

findMostFrequentWord('in the middle of the night');
findMostFrequentWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFrequentWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');