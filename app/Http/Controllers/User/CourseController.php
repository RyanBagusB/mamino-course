<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Academy;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $academies = Academy::with('learningPaths')->get();

        return Inertia::render('User/Academies/Index', [
            'academies' => $academies,
        ]);
    }
}
