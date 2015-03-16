function countSubstringOccur(arr) {
    var text = arr[1].toLowerCase(),
        searchedWord = arr[0].toLowerCase(),
        index,
        counter = 0;

    while (index !== -1) {
       index = text.indexOf(searchedWord, index);
        if (index !== -1) {
            index++;
            counter++;
        }
    }
// Using RegEx
//    var reg = new RegExp(searchedWord, 'g');
//    counter = text.match(reg).length;
    console.log(counter);
}

countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]);