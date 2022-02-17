<?php

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

//USER
Route::group([
    'middleware' => 'api',
    'prefix' => 'v1'
], function ($router) {
    Route::post('/user',  function (Request $request) {
        return 'post user';
    });
    Route::get('/user',  function (Request $request) {
        return 'get user';
    });
    Route::put('/user/{id}',  function (Request $request) {
        return 'update user';
    });
    Route::delete('/user/{id}',  function (Request $request) {
        return 'delete user';
    });
});

//Course
Route::group([
    'middleware' => 'api',
    'prefix' => 'v1'
], function ($router) {
    Route::post('/course',  function (Request $request) {
        return 'post course';
    });
    Route::get('/course',  function (Request $request) {
        return 'get course';
    });
    Route::post('/course/assign',  function (Request $request) {
        return 'post course assign to user';
    });
    Route::get('/course/result',  function (Request $request) {
        return 'get course result';
    });
    Route::put('/course/{id}',  function (Request $request) {
        return 'update course';
    });
    Route::delete('/course/{id}',  function (Request $request) {
        return 'delete course';
    });
});


//
