<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::crete('users', function (Blueprint $table){
            $table->increments('id');
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->enum('isAdmin', array(0, 1))->default(0);
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}