function modifyScore(arr){

    arr = arr.filter(function removeInvalidScores(element){
        return element >= 0 && element <= 400;
    }).map(function downScaleScore(element){
        return Math.round((element * 0.8) * 100) / 100;
    }).sort(function sortAsc(a, b){
        return a > b;
    });
    console.log(arr)
}

modifyScore([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);