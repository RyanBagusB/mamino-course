<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LearningPath;
use Inertia\Inertia;

class LearningPathController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/LearningPaths', [
            'learningPaths' => LearningPath::all()
        ]);
    }
}
