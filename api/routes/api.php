<?php

use App\Http\Controllers\BasketController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/basket', [BasketController::class, 'show']);
Route::put('/recipes', [BasketController::class, 'like']);

Route::resource('users', UserController::class);
Route::resource('recipes', RecipeController::class);
Route::resource('ingredients', IngredientController::class)->except(['index']);
