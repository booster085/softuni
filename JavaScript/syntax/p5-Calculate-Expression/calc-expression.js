'use strict';
function calcExpression(){
    var expression, regEx, result;

    result = document.getElementById('output-field');
    // Prevent from javascript injection through html escaping
    regEx = (/[^0-9a-zA-Z+-/*,./(/)%/]/g);
    expression = document.getElementById('input-field').value.replace(regEx, '');
    result.innerText = eval(expression);
}

