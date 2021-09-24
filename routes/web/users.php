<?php

use App\Http\Controllers\User\UserWebController;
use Illuminate\Support\Facades\Route;

Route::middleware(['throttle:300,1'])->group(function () {
    Route::get('/signup', [UserWebController::class, 'renderSignup']);
});
