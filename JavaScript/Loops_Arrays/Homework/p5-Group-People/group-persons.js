(function () {
    function group(persons, groupBy) {
        var groupList = {},
            criteria;

        for (var i = 0; i < persons.length; i++) {

            switch (groupBy) {
                case 'firstname': criteria = 'Group ' + persons[i].fname;
                    break;
                case 'lastname': criteria = 'Group ' + persons[i].lname;
                    break;
                case 'age': criteria = 'Group ' + persons[i].age;
                    break;
            }

            if(!groupList.hasOwnProperty(criteria)){

                groupList[criteria] = [];
                groupList[criteria].push(persons[i].toString());
            } else {
                groupList[criteria].push(persons[i].toString());
            }
        }
        printObject(groupList);
    }

    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.toString = function(){
            return this.fname + ' ' + this.lname + '(age ' + this.age + ')';
        }
    }
    function printObject(objectList){
        for (var element in objectList) {
            var result = element + ': [' + objectList[element].join(', ') + ']';
            console.log(result)
        }
        console.log('\n');

    }

    var people = [];
    people.push(new Person("Scott", "Guthrie", 38));
    people.push(new Person("Scott", "Johns", 36));
    people.push(new Person("Scott", "Hanselman", 39));
    people.push(new Person("Jesse", "Johns", 57));
    people.push(new Person("Jon", "Skeet", 38));

    group(people, 'firstname');
    group(people, 'lastname');
    group(people, 'age');


}());