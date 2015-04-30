<?php
function checkIfOnlyLetters($input)
{
    if (!preg_match_all('/[^A-Za-z\s]/', $input)) {
        return true;
    } else {
        return false;
    }
}
function checkIfOnlyLettersAndNumbers($input){
    if (!preg_match_all('/[^A-Za-z0-9\s]/', $input)) {
        return true;
    } else {
        return false;
    }

}
function checkIfLengthFrom2To20($input){
    if (strlen($input) >= 2 && strlen($input) <= 20) {
        return true;
    } else {
        return false;
    }
}
function checkPhone($input){
    if (!preg_match_all('/[^0-9\s\+\-]/', $input)) {
        return true;
    } else {
        return false;
    }
}
function checkEmail($input){
    return (filter_var($input, FILTER_VALIDATE_EMAIL));
}
