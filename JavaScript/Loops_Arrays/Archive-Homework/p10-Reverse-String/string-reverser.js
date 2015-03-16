function reverseString(str) {
    var reversedStr = '',
        i;
    for (i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));