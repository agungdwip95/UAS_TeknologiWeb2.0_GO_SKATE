<?php

use App\Models\Skateboard;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('/skateboards', \App\Http\Controllers\SkateboardController::class);
Route::get('/skateboards', [ 'as' => 'skateboards.index', 'uses' => 'App\Http\Controllers\SkateboardController@index']);
Route::get('/skateboards/create', [ 'as' => 'skateboards.create', 'uses' => 'App\Http\Controllers\SkateboardController@create']);
Route::post('/skateboards/store', [ 'as' => 'skateboards.store', 'uses' => 'App\Http\Controllers\SkateboardController@store']);
Route::get('/skateboards/produk', [ 'as' => 'skateboards.produk', 'uses' => 'App\Http\Controllers\SkateboardController@produk']);
Route::get('/skateboards/about', [ 'as' => 'skateboards.about', 'uses' => 'App\Http\Controllers\SkateboardController@about']);
Route::get('/skateboards/contact', [ 'as' => 'skateboards.contact', 'uses' => 'App\Http\Controllers\SkateboardController@contact']);
Route::get('/skateboards/{skateboard}/edit', [ 'as' => 'skateboards.edit', 'uses' => 'App\Http\Controllers\SkateboardController@edit']);
Route::put('/skateboards/{skateboard}', [ 'as' => 'skateboards.update', 'uses' => 'App\Http\Controllers\SkateboardController@update']);
Route::delete('/skateboards/{skateboard}', [ 'as' => 'skateboards.destroy', 'uses' => 'App\Http\Controllers\SkateboardController@destroy']);