function solve (inputArr){
    var student,
        course,
        grade,
        visit,
        currentLine = [],
        resultObj = {},
        counterObj = {},
        i;

    for (i = 0; i < inputArr.length; i++) {
        currentLine = inputArr[i].split('|');
        student = currentLine[0].trim();
        course = currentLine[1].trim();
        grade = Number(currentLine[2].trim());
        visit = Number(currentLine[3].trim());

        if (!resultObj.hasOwnProperty(course)) {
            resultObj[course] = {
                avgGrade: 0,
                avgVisits: 0,
                students: []
            };
            counterObj[course] = 0;
        }
        counterObj[course] += 1;
        resultObj[course].avgGrade += grade;
        resultObj[course].avgVisits += visit;
        if (resultObj[course].students.indexOf(student) === -1) {
            resultObj[course].students.push(student);
        }

    }

    resultObj = sortObjByKeys(resultObj);
    for (var elem in resultObj) {
        resultObj[elem].avgGrade = Number(parseFloat(resultObj[elem].avgGrade / counterObj[elem]).toFixed(2));
        resultObj[elem].avgVisits = Number(parseFloat(resultObj[elem].avgVisits / counterObj[elem]).toFixed(2));
        resultObj[elem].students.sort();

    }



    function sortObjByKeys(obj){
        var sortedObj = {},
            keys, key;
        keys = Object.keys(obj).sort();
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;

    }
    console.log(JSON.stringify(resultObj));

}



solve([ 'Peter Nikolov | PHP  | 5.50 | 8',
        'Maria Ivanova | Java | 5.83 | 7',
        'Ivan Petrov   | PHP  | 3.00 | 2',
        'Ivan Petrov   | C#   | 3.00 | 2',
        'Peter Nikolov | C#   | 5.50 | 8',
        'Maria Ivanova | C#   | 5.83 | 7',
        'Ivan Petrov   | C#   | 4.12 | 5',
        'Ivan Petrov   | PHP  | 3.10 | 2',
        'Peter Nikolov | Java | 6.00 | 9'
])