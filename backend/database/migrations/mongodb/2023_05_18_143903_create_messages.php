<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $collection) {
            $collection->integer('id')->unique();
            $collection->integer('sender_id');
            $collection->text('content');
            $collection->text('image_url')->nullable();
            $collection->text('attachment_url')->nullable();
            $collection->integer('user_id')->nullable();
            $collection->integer('group_id')->nullable();
            $collection->boolean('isRead')->default(false);
            $collection->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
