<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Domain;
use App\Models\Domain as ModelsDomain;
use App\Models\User;
use Illuminate\Support\Facades\Route;



Route::post('/register',[RegisterController::class, 'register']);
Route::post('/login',[LoginController::class, 'login']);


Route::controller(Domain::class)->group(function () {
    Route::post('/checkDomainExists', 'checkDomainExists');
    Route::post('/addDomain', 'addDomain');
    Route::get('/getDomainByUser/{id}', 'getDomainByUser');
});
