'use strict';
function calcSupply(age, maxAge, food, foodPerDay) {
    var remainingDays,
        totalAmountOfFood,
        result;
    remainingDays = (maxAge - age) * 365;
    totalAmountOfFood = remainingDays * foodPerDay;
    result = totalAmountOfFood + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' old.';
    return result;
}

console.log(calcSupply(38, 118, 'chocolate', 0.5));
console.log(calcSupply(20, 87, 'fruits', 2));
console.log(calcSupply(16, 102, 'nuts', 1.1));