<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumTopicsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forum_topics', function(Blueprint $table){
            $table->increments('id');
            $table->string('title');
            $table->text('body');
            $table->integer('group_id');
            $table->integer('category_id');
            $table->integer('author_id');
            $table->integer('comments_counter');
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
        Schema::drop('forum_topics');
    }

}
