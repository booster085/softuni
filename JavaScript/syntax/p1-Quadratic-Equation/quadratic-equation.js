'use strict';
function calcQuadraticEquationsRoots(a, b ,c){
    var discriminant,
        result =  ("No real rots!"),
        x1,
        x2;
    discriminant = b * b - (4 * a * c);
    if (discriminant == 0) {
        result = 'х = ' + (-b / (2 * a));
    } else if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = 'x1 = ' + x1 + '\nx2 = ' + x2;
    }
    return result;
}
console.log(calcQuadraticEquationsRoots(2, 5, -3));
console.log(calcQuadraticEquationsRoots(2, -4, 2));
console.log(calcQuadraticEquationsRoots(4, 2, 1));