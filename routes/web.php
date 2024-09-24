<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::resource('/books', BookController::class)->only(['index', 'show']);
// Route::get('/books/{book}', function (string $book) {
//     return inertia('Book', ['book' => $book]);
// });

Route::get('/vsbendrey', function () {
    return inertia('Bendrey');
});
Route::get('/images', function () {
    return inertia('Images');
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
