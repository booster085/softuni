function solve(inputArr){
    var bladeType,
        application,
        bladeLen,
        i,tableRow,
        tableHead = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>';

    inputArr = inputArr.filter(function(element){
        return element > 10;
    }).map(function(element){
        return Math.floor(element);
    });
    console.log(tableHead);
    for (i in inputArr) {
        bladeLen = inputArr[i];
        bladeType = checkBladeType(bladeLen);
        application = checkBladeApplication(bladeLen);

        tableRow = '<tr><td>' + bladeLen + '</td><td>' + bladeType + '</td><td>' + application + '</td></tr>';
        console.log(tableRow);
    }

    function checkBladeType(lenght){
        return lenght > 40 ? 'sword' : 'dagger';
    }
    function checkBladeApplication(lenght){
        lenght %= 5;
        var result;
        switch (lenght){
            case 0: result = '*rap-poker';
                break;
            case 1: result = 'blade';
                break;
            case 2: result = 'quite a blade';
                break;
            case 3: result = 'pants-scraper';
                break;
            case 4: result = 'frog-butcher';
                break;

        }
        return result;
    }
    console.log('</tbody>\n</table>')

}

// 'blade',             --> n*5 + 1
// 'quite a blade',     --> n*5 + 2
// 'pants-scraper',     --> n*5 + 3
// 'frog-butcher'       --> n*5 + 4
// '*rap-poker'         --> n*5 + 5


//ROUND length

//if > 40cm is SWORD
//if <= 40cm is DAGGER
// <= 10cm DO NOT PRINT

//  <table border="1">
//  <thead>
//  <tr><th colspan="3">Blades</th></tr>
//  <tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
//  </thead>
//  <tbody>


var input = [
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
];

solve(input);
