<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/books', function () {
    return inertia('Books');
});
Route::get('/articles', function () {
    return inertia('Articles');
});
Route::get('/videos', function () {
    return inertia('Videos');
});
Route::get('/contact', function () {
    return inertia('Contact');
});