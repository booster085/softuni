function solve(inputArr){
        var i,color, name, age, opponent, loss, rank, line, result = {};

    for (i in inputArr) {
        line = inputArr[i].trim().split(/\|/g);
        color = line[0].trim();

        if (!result.hasOwnProperty(color)) {
            result[color] = {
                age: -1,
                name: '',
                opponents: [],
                rank: 0, //I'll use it like win counter
                loss: 0
            }
        }
        switch (line[1]) {
            case 'win': result[color].rank++ ;
                result[color].opponents.push(line[2]);
                break;
            case 'loss': result[color].loss++;
                result[color].opponents.push(line[2]);
                break;
            case 'name': result[color].name = line[2];
                break;
            case 'age': result[color].age = (line[2]);
                break;
        }

    }
    var finalObj = {};
    var keys = Object.keys(result).sort();

    for (i in keys) {
        if (result[keys[i]].age !== -1 && result[keys[i]].name !== '') {
            result[keys[i]].opponents.sort();
            result[keys[i]].rank = ((result[keys[i]].rank + 1) / (result[keys[i]].loss + 1)).toFixed(2);
            delete result[keys[i]].loss;
            finalObj[keys[i]] = result[keys[i]];
        }
    }

    console.log(JSON.stringify(finalObj));


}


//rank = (wins+1) / (losses+1)


var input =['purple|age|99',
            'red|age|44',
            'blue|win|pesho',
            'blue|win|mariya',
            'purple|loss|Kiko',
            'purple|loss|Kiko',
            'purple|loss|Kiko',
            'purple|loss|Yana',
            'purple|loss|Yana',
            'purple|loss|Manov',
            'purple|loss|Manov',
            'red|name|gosho',
            'blue|win|Vladko',
            'purple|loss|Yana',
            'purple|name|VladoKaramfilov',
            'blue|age|21',
            'blue|loss|Pesho'

];

solve(input);

