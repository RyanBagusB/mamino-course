<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\CourseController;
use App\Http\Controllers\Admin\AcademyController;
use App\Http\Controllers\Admin\LearningPathController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/', [CourseController::class, 'index']);
    Route::get('/learning-paths/{learningPath}', [CourseController::class, 'learningPath']);

    Route::prefix('admin')->group(function () {
        Route::resource('academies', AcademyController::class)->except(['show', 'destroy']);
        Route::resource('learning-paths', LearningPathController::class)->except(['show', 'destroy']);
    });
});

