<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ResultController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/health', function (Request $request) {
    return 'healthy';
});

Route::group([
    'middleware' => ['api'],
    'prefix' => 'v1'
], function ($router) {
    //USER
    Route::post('/users',  [UserController::class, 'store']);
    Route::get('/users',  [UserController::class, 'index']);
    Route::get('/users/all',  [UserController::class, 'all']);
    Route::get('/users/{id}',  [UserController::class, 'show']);
    Route::put('/users/{id}',  [UserController::class, 'update']);
    Route::delete('/users/{id}',  [UserController::class, 'destroy']);
    Route::post('/users/course/assign', [ResultController::class, 'store']);

    //COURSE
    Route::post('/courses',  [CourseController::class, 'store']);
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/all',  [CourseController::class, 'all']);
    Route::put('/courses/{id}',  [CourseController::class, 'update']);
    Route::delete('/courses/{id}',  [CourseController::class, 'destroy']);

    //RESULT
    Route::post('/results',  [ResultController::class, 'store']);
    Route::get('/results', [ResultController::class, 'index']);
    Route::put('/results/{id}',  [ResultController::class, 'update']);
    Route::delete('/results/{id}',  [ResultController::class, 'destroy']);
});


//
