<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::middleware(['throttle:300,1', 'isWebUser'])->group(function () {
    Route::get('/', [Controller::class, 'renderHome']);
});
