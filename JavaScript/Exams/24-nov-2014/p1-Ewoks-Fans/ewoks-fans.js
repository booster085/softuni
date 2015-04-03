function solve(inputArr){
    var isThereResult = false,
        i, lover, hater, startLimit, endLimit, keyDate;


    startLimit = new Date('01/01/1900');
    endLimit = new Date('01/01/2015');
    keyDate = new Date('05/25/1973');

    for(i in inputArr){
    inputArr[i] = new Date( inputArr[i].replace( /(\d{2})\.(\d{2})\.(\d{4})/, "$2/$1/$3") );

    }
    inputArr = inputArr.filter(function(elem){
        if (+elem > +startLimit && +elem < endLimit) {
            return elem;
        }
    }).sort(function(a, b){
        return +a - +b;
    });

    if (+inputArr[inputArr.length - 1] > +keyDate) {
        lover = 'The biggest fan of ewoks was born on ' + inputArr[inputArr.length - 1].toDateString();
        console.log(lover);
        isThereResult = true;
    }
    if (+inputArr[0] < +keyDate) {
        hater = 'The biggest hater of ewoks was born on ' + inputArr[0].toDateString();
        console.log(hater);
        isThereResult = true;
    }
    if (!isThereResult) {
        console.log('No result')
    }

}


solve(['10.10.1566',
       '10.10.1966',
       '10.10.1967',
       '10.10.1968',
       '10.10.1969',
       '10.10.1970',
       '10.10.1971',
       '11.11.2006',
       '11.11.2007',
       '11.11.2008',
       '11.11.2009',
       '11.11.2010',
       '11.11.2011',
       '11.11.2012'
     ]);
