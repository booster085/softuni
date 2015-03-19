'use strict';
function calcCylinderVol(arr) {
//    Cylinder Volume = π r2 h
    var radius, height, volume;
    radius = arr[0];
    height = arr[1];
    volume = Math.PI * radius * radius * height;
    return volume.toFixed(3);
}
console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));