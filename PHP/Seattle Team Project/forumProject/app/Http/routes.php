<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', array('uses' => 'HomeController@welcome', 'as' => 'home'));

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::group(array('before' => 'guest'), function(){
    Route::get('/user/create', array('uses' => 'UserController@getCreate', 'as' => 'getCreate'));
    Route::get('/user/login', 'UserController@getLogin');

    // csrf => cross-site request forgery(also known as one-click attack ot sea-surf)
    Route::group(array('before' => 'csrf'), function() {
        // prevent from user posting
        Route::post('/user/create', array('uses' => 'UserController@postCreate', 'as' => 'postCreate'));
        Route::post('/user/login', 'UserController@postCreate');
    });
});


