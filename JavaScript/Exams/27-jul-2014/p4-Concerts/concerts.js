function solve(inputArr) {
    var band,
        town,
        venue,
        i, j,
        finalObj = {},
        stadiumKey = [],
        townKey = [],
        sortedObj,
        stadiumObj;

    for (i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].split('|');
        band = inputArr[i][0].trim();
        town = inputArr[i][1].trim();
        venue = inputArr[i][3].trim();

        if (!finalObj.hasOwnProperty(town)) {
            finalObj[town] = {};
        }
        if (!finalObj[town].hasOwnProperty(venue)) {
            finalObj[town][venue] = [];
        }
        if (finalObj[town][venue].indexOf(band) === -1) {
            finalObj[town][venue].push(band);
        }


    }

    townKey = Object.keys(finalObj).sort();
    sortedObj = {};
    for (i = 0; i < townKey.length; i++) {

        stadiumKey = Object.keys(finalObj[townKey[i]]).sort();
        sortedObj[townKey[i]] = {};
        for (j = 0; j < stadiumKey.length; j++) {
            stadiumObj = {};

            stadiumObj[stadiumKey[j]] = finalObj[townKey[i]][stadiumKey[j]].sort();
            sortedObj[townKey[i]][stadiumKey[j]] = stadiumObj[stadiumKey[j]];
        }

    }
    console.log(JSON.stringify(sortedObj));

}
//SORTING FUNCTION
//function sortObjectProperties(obj) {
//    var keysSorted = Object.keys(obj).sort();
//    var sortedObj = {};
//    for (var i = 0; i < keysSorted.length; i++) {
//        var key = keysSorted[i];
//        sortedObj[key] = obj[key];
//    }
//    return sortedObj;
//}

solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);