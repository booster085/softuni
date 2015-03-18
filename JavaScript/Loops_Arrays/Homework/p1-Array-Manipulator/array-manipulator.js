function manipulateArray(arr){
    var maxNum,
        minNum,
        mostFrequent,
        tempBest = 1,
        best = 1,
        i;

    arr = arr.filter(function removeNotANumber(element){
        if (!isNaN(element)) {
            return true;
        }
    }).sort(function sortNums(a, b){
        return a < b;
    });
    minNum = arr[arr.length - 1];
    maxNum = arr[0];
    for (i = 1; i < arr.length; i++) {

        if (arr[i - 1] === arr[i]) {
            tempBest++;
            if (tempBest > best) {
                best = tempBest;
                mostFrequent = arr[i];
            }
        } else {
            tempBest = 1;
        }
    }


    console.log('Min number: ' + minNum + '\nMax number: ' + maxNum + '\nMost frequent number: ' + mostFrequent);
    console.log(arr)

}


manipulateArray(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);