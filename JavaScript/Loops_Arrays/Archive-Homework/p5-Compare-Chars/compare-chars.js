function compareChars(arr1, arr2){
    var areEqual = 'Equal',
        i;
    if (arr1.length === arr2.length) {
        for (i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                areEqual = 'Not Equal';
                break;
            }
        }
    } else {
        areEqual = 'Not Equal';
    }
    console.log(areEqual);
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
