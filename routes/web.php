<?php

use App\Http\Controllers\DemoController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::controller(TodoController::class)->prefix('todos')->group(function () {
    Route::get('/', 'index');
    Route::get('/{todo}', 'todoById');
    Route::post('/{todo}', 'update');
    Route::delete('/{todo}', 'delete');
});


Route::get('/', [TodoController::class, 'show']);
