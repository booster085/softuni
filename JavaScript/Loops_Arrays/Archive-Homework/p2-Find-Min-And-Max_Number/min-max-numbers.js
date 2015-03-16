function findMinAndMax(arr) {
    var result = '',
        min,
        max;
    arr.sort(function sortNumbers(a, b){
        return a > b;
    });
    min = arr[0];
    max = arr[arr.length - 1];
    result = 'Min -> ' + min + '\nMax -> ' + max;
    return result;
}
console.log(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]));
console.log(findMinAndMax([2, 2, 2, 2, 2]));
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]));