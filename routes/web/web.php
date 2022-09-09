<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\UserWebController;
use Illuminate\Support\Facades\Route;

Route::middleware(['throttle:300,1'])->group(function () {
    Route::get('forgot-password', [UserWebController::class, 'renderForgotPassword']);
    Route::post('forgot-password', [UserWebController::class, 'forgotPassword']);
    Route::get('change-password', [UserWebController::class, 'renderChangePassword']);
    Route::put('change-password', [UserWebController::class, 'changePassword']);


    Route::middleware(['isWebUser'])->group(function () {
        Route::get('/', [Controller::class, 'renderHome']);
    });
});
