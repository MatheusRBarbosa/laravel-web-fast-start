<?php

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware(['throttle:300,1'])->group(function () {
    Route::post('signup', [UserController::class, 'store']);
});
