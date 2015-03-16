function findMaxSequence(arr) {
    var tempStart = 0,
        bestStart = 0,
        tempMax = 1,
        bestMax = 1,
        bestEnd,
        i,
        result = 'no',
        isThereIncreasingSeq = false;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            tempMax++;
            isThereIncreasingSeq = true;
        } else {
            tempStart = i;
            tempMax = 1;
        }
        if (tempMax >= bestMax) {
            bestMax = tempMax;
            bestStart = tempStart;
        }
    }
    if (isThereIncreasingSeq) {
        bestEnd = bestStart + bestMax;
        result = arr.slice(bestStart, bestEnd);
    }

    console.log(result);
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);