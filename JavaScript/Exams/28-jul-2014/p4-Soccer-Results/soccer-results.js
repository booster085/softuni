function solve(inputArr){
    var i, j,
        reg,
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        match,
        resultObj = {},
        objKeys = [];

    for (i = 0; i < inputArr.length; i++) {
        reg = /([\w\s]+)\s*\/\s*([\w\s]+)\s*:\s*(\d+){0,2}\s*\-\s*(\d+){0,2}/g;
        match = reg.exec(inputArr[i]);
        homeTeam = match[1].trim();
        awayTeam = match[2].trim();
        homeGoals = Number(match[3].trim());
        awayGoals = Number(match[4].trim());

        fillResults(homeTeam, awayTeam, homeGoals, awayGoals);
        fillResults(awayTeam, homeTeam, awayGoals, homeGoals);

        function fillResults(homeTeam, awayTeam, homeGoals, awayGoals){
            if(!resultObj[homeTeam]) {
                resultObj[homeTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            };
            }
            resultObj[homeTeam].goalsScored += homeGoals;
            resultObj[homeTeam].goalsConceded += awayGoals;
            if (resultObj[homeTeam].matchesPlayedWith.indexOf(awayTeam) == -1) {
                resultObj[homeTeam].matchesPlayedWith.push(awayTeam);
            }
        }


    }
    i = 0;
    resultObj = sortObjectByKey(resultObj);
    for(i in resultObj){
        resultObj[i].matchesPlayedWith.sort();
    }
    function sortObjectByKey(obj){
        var sortedObj = {};
        objKeys = Object.keys(obj).sort();
        for (j = 0; j < objKeys.length; j++) {
            sortedObj[objKeys[j]] = obj[objKeys[j]];
        }
        return sortedObj;
    }

    console.log(JSON.stringify(resultObj));

}



solve(['Germany / Argentina: 1-0',
       'Brazil / Netherlands: 0-3',
       'Netherlands / Argentina: 0-0',
       'Brazil / Germany: 1-7',
       'Argentina / Belgium: 1-0',
       'Netherlands / Costa Rica: 0-0',
       'France / Germany: 0-1',
       'Brazil / Colombia: 2-1'
]);