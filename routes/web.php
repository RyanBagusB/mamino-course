<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\CourseController;
use App\Http\Controllers\Admin\AcademyController;
use App\Http\Controllers\Admin\LearningPathController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/', [CourseController::class, 'index'])->name('user.academies.index');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/academies', [AcademyController::class, 'index'])->name('academies.index');
        Route::post('/academies', [AcademyController::class, 'store'])->name('academies.store');
        Route::get('/learning-paths', [LearningPathController::class, 'index'])->name('learning-paths.index');
        Route::post('/learning-paths', [LearningPathController::class, 'store'])->name('learning-paths.store');
        Route::get('/learning-paths/{learningPath}/edit', [LearningPathController::class, 'edit'])->name('learning-paths.edit');
        Route::put('/learning-paths/{learningPath}', [LearningPathController::class, 'update'])->name('learning-paths.update');
    });
});
