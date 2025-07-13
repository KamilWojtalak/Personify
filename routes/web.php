<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PersonaTypeController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [StaticPageController::class, 'welcome'])->name('home');
Route::resource('/contacts', ContactController::class);

Route::get('/persona-types/search', [PersonaTypeController::class, 'search'])->name('persona-types.search');
Route::resource('/persona-types', PersonaTypeController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
