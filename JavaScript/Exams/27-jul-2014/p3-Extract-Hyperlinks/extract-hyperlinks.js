function solve(arr) {
    var input, match, reg,
        hrefValue;
    input = arr.join('\n');
    reg = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s\>]*))[^>]*/g;
    while (match = reg.exec(input)) {
        hrefValue = match[3];
        if (hrefValue == undefined) {
            hrefValue = match[4];
        }
        if (hrefValue == undefined) {
            hrefValue = match[5];
        }
        console.log(hrefValue);
    }

}


solve(["</li><li><a href = '/forum' >Forum</a>",
    '<ul><li><a   href="/"  id="home">Home</a></li><li>',
    '<a id="js" href ="javascript:alert(\'hi\')" class="new">click</a></li>',
    '<ul><li><a   href="/"  id="home">Home</a></li><li>',
    '<a class="selected" href=/courses>Courses</a></li><li>',
    '<a class="href" onclick="go()" href= "#">Forum</a></li><li>',
    "<li><a id='nakov' href = http://www.nakov.com class='new'>nak</a></li></ul>",
    '<a href="#empty"></a>',
    "<a id=\"href\">href='fake'<img src='http://abv.bg/i.gif' alt='abv'/></a><a href=\"#\">&lt;a href='hello'&gt;</a>",
    '<a href="#commented">commentex hyperlink</a>'

]);