<?php

use App\Http\Controllers\DatasetController;
use App\Http\Controllers\NaiveBayesController;
use App\Http\Controllers\ProfileController;
use App\Models\Crop;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage',);
})->name('landingpage');

Route::get('/data-field', function () {
    return Inertia::render('DataField',);
})->name('datafield');

Route::get('/crop-label', function () {
    return Inertia::render('CropLabel', ['crops' => Crop::get()]);
})->name('croplabel');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/predict-naivebayes', [NaiveBayesController::class, 'predictNaivebayes']);

    Route::get('/dataset', [DatasetController::class, 'index'])->name('dataset');
    Route::get('/dataset/naivebayes/{datasets}', [DatasetController::class, 'predict'])->name('dataset.predict');
    Route::get('/dataset/view/{datasets}', [DatasetController::class, 'view'])->name('dataset.view');
    Route::post('/dataset', [DatasetController::class, 'store'])->name('dataset.store');
});

require __DIR__.'/auth.php';
