function replaceATag(str){
    var reg;

    reg = /<a(.*?)>(.*?)<\/a>/gi;

    return str.replace(reg, '[URL $1]$2[/URL]')

}

console.log(replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));
