<?php

class UserController extends Controler
{
    // gets the view of register page
    function getCreate()
    {
        return 'register page';
    }
    // gets the view of login page
    function getLogin()
    {
        return 'login page';
    }
}