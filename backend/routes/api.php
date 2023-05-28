<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register',[AuthController::class, 'register'])->name('api-register');
Route::post('/login',[AuthController::class, 'login'])->name('api-login');

Route::middleware('check-user-login-api')->group(function() {
    Route::post('/send-message', [MessageController::class, 'send'])->name('send-message');
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
