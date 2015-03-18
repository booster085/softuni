function courseGradeScaling(str){

    str.map(function increaseScore(element){
        element.score += element.score * 0.1;
        if (element.score >= 100) {
            element.hasPassed = true;
        } else {
            element.hasPassed = false;
        }
        return element;
    });
    str = str.filter(function removeLowScores(element){
        if (element.hasPassed === true) {
            return element;
        }
    });
    str = str.sort(function sortByName(man1, man2){
        return man1.name > man2.name;
    });
    console.log(str);

}


courseGradeScaling([
        {
            'name' : 'Пешо',
            'score' : 91
        },
        {
            'name' : 'Лилия',
            'score' : 290
        },
        {
            'name' : 'Алекс',
            'score' : 343
        },
        {
            'name' : 'Габриела',
            'score' : 400
        },
        {
            'name' : 'Жичка',
            'score' : 70
        }
    ]
);