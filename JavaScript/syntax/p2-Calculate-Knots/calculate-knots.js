'use strict';
function convertKmhToKnots(kmh){
    return (kmh * 0.539956803).toFixed(2);
}
console.log(convertKmhToKnots(20));
console.log(convertKmhToKnots(112));
console.log(convertKmhToKnots(400));

