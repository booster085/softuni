function printNumbers(number) {
    var i,
        numArray = [];
    for (i = 1; i <= number; i++) {
        if(i % 4 !== 0 && i % 5 !== 0){
            numArray.push(i);
        }
    }
    if (numArray.length > 0) {
        console.log(numArray.join(', '));
    } else {
        console.log('no');
    }
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);