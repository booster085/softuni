function solve(inputArr){
    var output = {},
        extension,
        fileName,
        memory, line, i, k;

    for (i in inputArr) {
        line = inputArr[i].match(/\S+/g);
        fileName = line[0];
        extension = line[1];
        memory = parseFloat(line[2].substr(0, line[2].length - 2));

        if (!output.hasOwnProperty(extension)) {
            output[extension] = {
                files: [],
                memory: 0
            };
        }
        output[extension].files.push(fileName);
        output[extension].memory += memory;

    }
    //console.log(output);
    output = sortObjectByKeys(output);
    for (k in output) {
        output[k].files.sort();
        output[k].memory = output[k].memory.toFixed(2);
    }
    console.log(JSON.stringify(output));

    function sortObjectByKeys(obj){
        var keys, j,
            sortedObj = {};
        keys = Object.keys(obj).sort();
        for (j in keys) {
            sortedObj[keys[j]] = obj[keys[j]];
        }
        return sortedObj;
    }


}

var input = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'

];
solve(input);
