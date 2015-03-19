function sortLetters(text, asc) {

    console.log(text.split('').sort(function(a, b){
        if(asc){
            return a.toLowerCase() > b.toLowerCase();
        } else {
            return a.toLowerCase() < b.toLowerCase();
        }

    }).join(''));

}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false)