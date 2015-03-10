function convertDecimalToHexadecimal(decimal){
    return decimal.toString(16);
}
function takeDecimalValueAndPopupHexadecimal() {
    var decimal = parseInt(prompt('Enter a number:'));
    var hexadecimal = convertDecimalToHexadecimal(decimal);
    alert(hexadecimal.toUpperCase());
}
takeDecimalValueAndPopupHexadecimal();