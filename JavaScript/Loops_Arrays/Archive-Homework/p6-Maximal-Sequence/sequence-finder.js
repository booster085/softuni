function findMaxSequence(arr) {
    var i,
        tempMax = 1,
        bestMax = 1,
        bestStart = 0,
        tempStart = 0,
        bestEnd,
        result;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            tempMax++;
        } else {
            tempMax = 1;
            tempStart = i;
        }
        if (tempMax >= bestMax) {
            bestMax = tempMax;
            bestStart = tempStart;
        }
    }
    bestEnd = bestStart + bestMax;
    result = arr.slice(bestStart, bestEnd);
    console.log(result);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);