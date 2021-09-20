<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });

        DB::insert(
            'insert into roles (id, name, description, created_at, updated_at) values 
            (?, ?, ?, ?, ?), 
            (?, ?, ?, ?, ?), 
            (?, ?, ?, ?, ?)',
            [
                1, 'sadmin', 'Super Admin', now(), now(),
                2, 'admin', 'Admin', now(), now(),
                3, 'user', 'Normal user', now(), now()
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
