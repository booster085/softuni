function calcCircleArea(r){
    return Math.PI * (r * r);
}
function printRadiusAndArea(radius){
    var area, result;
    area = calcCircleArea(radius);
    result = ('<p>r = ' + radius + '; area = ' + area + '</p>');
    document.writeln(result);

}
printRadiusAndArea(7);
printRadiusAndArea(1.5);
printRadiusAndArea(20);