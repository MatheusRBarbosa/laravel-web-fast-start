<?php

use App\Http\Controllers\User\UserApiController;
use Illuminate\Support\Facades\Route;


Route::middleware(['throttle:300,1'])->group(function () {
    Route::post('signup', [UserApiController::class, 'store']);
});
