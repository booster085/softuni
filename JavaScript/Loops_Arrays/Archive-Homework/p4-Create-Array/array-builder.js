function createArray() {
    var numberArr = new Array(21),
        i;
    for (i = 0; i < numberArr.length; i++) {
        numberArr[i] = i * 5;
    }
    return numberArr.join(', ');
}
// In the output example there are 21 integers. 20 are up to 95 including zero
console.log(createArray());