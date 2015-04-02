function solve(input){
    var numbers = [], i,
        tempNum;
    numbers = input[0].match(/\d+/g);

    for(i in numbers){
        tempNum = Number(numbers[i]).toString(16).toUpperCase();
        numbers[i] = addZeroes(tempNum);

    }
    console.log(numbers.join('-'));
    function addZeroes(hexNum){
        var len = 4 - hexNum.length;
        for (i = 0; i < len; i += 1) {
            hexNum = '0' + hexNum;
        }
        return '0x' + hexNum;
    }

}


solve(['20']);