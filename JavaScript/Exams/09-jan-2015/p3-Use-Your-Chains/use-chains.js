function solve(input){
    var reg, match,
        paragraph, ch,
        result = [],
        char;

    reg = /<p>(.*?)<\/p>/g;

    while(match = reg.exec(input[0])){
        paragraph = match[1].replace(/[^a-z0-9]+/g, ' ').split('');

        for (ch in paragraph) {
            char = paragraph[ch].charCodeAt(0);

            if (char >= 97 && char < 110) {
                paragraph[ch] = String.fromCharCode(char + 13);

            } else if (char >= 110 && char <= 122) {
                paragraph[ch] = String.fromCharCode(char - 13);

            }
        }
        paragraph = paragraph.join('');
        result.push(paragraph);

    }
    console.log(result.join(''))



}


solve(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>'])


//a --> 97
//m --> 109
//n --> 110
//z --> 122