<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Academy;
use App\Models\LearningPath;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $academies = Academy::with('learningPaths')->get();

        return Inertia::render('User/Index', [
            'academies' => $academies,
        ]);
    }

    public function learningPath(LearningPath $learningPath)
    {
        $learningPath->load('academies');

        return Inertia::render('User/LearningPath', [
            'learningPath' => $learningPath,
        ]);
    }
}
