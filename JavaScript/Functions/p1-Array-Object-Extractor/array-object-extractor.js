function extractObjects(array){
    var i,
        objArray = [];

    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && !(Array.isArray(array[i]))) {
            objArray.push(array[i])
        }
    }
    console.log(objArray);
}


extractObjects([
        "Pesho",
        4,
        4.21,
        { name : 'Valyo', age : 16 },
        { type : 'fish', model : 'zlatna ribka' },
        [1,2,3],
        "Gosho",
        { name : 'Penka', height: 1.65}
        ]);