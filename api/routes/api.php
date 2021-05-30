<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BasketController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRecipeController;
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

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return auth()->user();
    });

    Route::apiResource('basket', BasketController::class)->only('index');
    Route::apiResource('user/recipes', UserRecipeController::class);

    Route::post('recipes/{id}/like', [RecipeController::class , 'like']);
    Route::post('recipes/{id}/dislike', [RecipeController::class , 'dislike']);
    Route::post('recipes/{id}/react', [RecipeController::class, 'react']);
    Route::apiResource('recipes', RecipeController::class);

    Route::apiResource('ingredients', IngredientController::class)->except(['index', 'delete', 'update']);

    Route::post('/auth/logout', [AuthController::class, 'logout']);
});

Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

//testing purposes
//Route::get('basket', [BasketController::class, 'show']);


