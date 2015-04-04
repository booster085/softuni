function solve(inputArr) {
//Initialize variables
    var reg, i, line, j,
        owner,
        luggageName,
        type,
        isFood,
        isDrink,
        isFragile,
        weight,
        transferredWith,
        sortBy,
        result = {},
        compareKgObj = {},
        sortedByWeight = {};

    sortBy = inputArr.pop();

    reg = /\.*\*\.*/g;

// Create Object
    for (i = 0; i < inputArr.length; i += 1) {
        line = inputArr[i].split(reg);
        owner = line[0].trim();
        luggageName = line[1].trim();
        isFood = line[2].trim();
        isDrink = line[3].trim();
        type = checkLuggageType(isFood, isDrink);
        isFragile = checkIfTrue(line[4].trim());
        weight = parseFloat(line[5].trim());
        transferredWith = line[6].trim();

        if (!result.hasOwnProperty(owner)) {
            result[owner] = {};
            compareKgObj[owner] = {};
        }

        result[owner][luggageName] = {
            kg: weight,
            fragile: isFragile,
            type: type,
            transferredWith: transferredWith
        };
        compareKgObj[owner][luggageName] = weight;

    }


    switch (sortBy) {
        case 'weight':
            result = sortObjFromHelpObj(compareKgObj, result);

            break;
        case 'luggage name':
            for (i in result) {
                result[i] = sortObjByKey(result[i]);
            }
            break;
    }
    console.log(JSON.stringify(result));

// A MAKE ONE OBJECT WITH  KEY { KEY : VALUE} SORT BY PROPERTY AND IN THIRD OBJ A WRITE THE NEW SORTED OBJECTS

// { 'Ivan': { clothes: { kg: 5.6, color: 'white' }
//             food: { kg: 13, type: fruits}}
//   'Peter': { drinks: { kg: 4.5, type: 'vodka' }}
// }

//Help Obj

// { 'Ivan': { clothes: 5.6}
//   'Peter': {drinks: 4.5}
// }

    function sortObjFromHelpObj(helpObj, mainObjToSort) {
        var sortedByProp = {};
        for (var k in helpObj) {
            helpObj[k] = sortObjByProperty(helpObj[k])
        }
        for (i in helpObj) {
            sortedByProp[i] = {};
            for (j in helpObj[i]) {
                sortedByProp[i][j] = mainObjToSort[i][j];

            }
        }
        return sortedByProp;
    }

    function sortObjByProperty(obj) {
        var key,
            sortable = [],
            sortedObj = {};
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                sortable.push([key, obj[key]])
            }
        }
        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });
        for (j in sortable) {
            sortedObj[sortable[j][0]] = obj[sortable[j][0]];
        }
        return sortedObj;

    }

    function sortObjByKey(obj) {
        var index, subObj = {};
        ;
        var keys = Object.keys(obj).sort();
        for (index in keys) {
            subObj[keys[index]] = obj[keys[index]];
        }
        return subObj;

    }

    function checkLuggageType(food, drink) {
        if (checkIfTrue(food)) {
            return 'food';
        } else if (checkIfTrue(drink)) {
            return 'drink'
        } else
            return 'other';
    }

    function checkIfTrue(str) {
        if (str === 'true') {
            return true;
        } else {
            return false;
        }
    }

}


solve(['Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict'
]);

//[owner name]          --> string
// [luggage name]       --> string
// [is food]            --> string  'true' / 'false'  if 'true' --> luggage type = food'
// [is drink]           --> string  'true' / 'false'  if 'true' --> luggage type = 'drink'
//                   if  food --> 'false' and drink --> 'false' --> luggage type = 'other'
// [is fragile]         --> string  'true' / 'false'
// [weight in kg]       --> float
// [transferred with]   --> string   'ATV' / 'backpack'

//one '*' sign and 0 or more '.'

//sorting criteria  --> luggage name --> alphabetically
//                      weight       --> weight asc
//                      strict       --> order of appearance