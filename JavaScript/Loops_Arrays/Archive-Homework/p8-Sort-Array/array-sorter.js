function sortArray(arr) {
    var i, j,
        minNumber = Number.MAX_VALUE,
        minNumberIndex,
        temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (minNumber > arr[j]) {
                minNumber = arr[j];
                minNumberIndex = j;
            }
        }
        if (arr[i] > arr[minNumberIndex]) {
            temp = arr[i];
            arr[i] = arr[minNumberIndex];
            arr[minNumberIndex] = temp;
        }
        minNumber = Number.MAX_VALUE;
    }
    return arr.join(', ');
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));