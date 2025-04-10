<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Academy;
use Inertia\Inertia;

class AcademyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Academies', [
            'academies' => Academy::all()
        ]);
    }
}
